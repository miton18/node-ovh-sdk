"use strict";
// GENERATED SDK for horizonView API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Access Point type the customer can deploy
 */
var HorizonViewAccessPointType;
(function (HorizonViewAccessPointType) {
    HorizonViewAccessPointType["PRIVATEACCESSPOINT"] = "privateAccessPoint";
    HorizonViewAccessPointType["PUBLICACCESSPOINT"] = "publicAccessPoint";
})(HorizonViewAccessPointType = exports.HorizonViewAccessPointType || (exports.HorizonViewAccessPointType = {}));
/*
 * Pool type the customer can deploy
 */
var HorizonViewPoolType;
(function (HorizonViewPoolType) {
    HorizonViewPoolType["HYBRIDPOOL"] = "hybridPool";
    HorizonViewPoolType["PRIVATEPOOL"] = "privatePool";
    HorizonViewPoolType["PUBLICPOOL"] = "publicPool";
})(HorizonViewPoolType = exports.HorizonViewPoolType || (exports.HorizonViewPoolType = {}));
/*
 * All states a dedicated horizon  can be in
 */
var HorizonViewState;
(function (HorizonViewState) {
    HorizonViewState["AVAILABLE"] = "available";
    HorizonViewState["CREATING"] = "creating";
    HorizonViewState["DELIVERED"] = "delivered";
    HorizonViewState["DISABLED"] = "disabled";
    HorizonViewState["ERROR"] = "error";
    HorizonViewState["RESERVED"] = "reserved";
})(HorizonViewState = exports.HorizonViewState || (exports.HorizonViewState = {}));
/*
 * All states a Horizon View  Task can be in
 */
var HorizonViewTaskState;
(function (HorizonViewTaskState) {
    HorizonViewTaskState["CANCELED"] = "canceled";
    HorizonViewTaskState["DOING"] = "doing";
    HorizonViewTaskState["DONE"] = "done";
    HorizonViewTaskState["ERROR"] = "error";
    HorizonViewTaskState["FIXING"] = "fixing";
    HorizonViewTaskState["TOCANCEL"] = "toCancel";
    HorizonViewTaskState["TOCREATE"] = "toCreate";
    HorizonViewTaskState["TODO"] = "todo";
    HorizonViewTaskState["UNKNOWN"] = "unknown";
    HorizonViewTaskState["WAITINGFORCHILDS"] = "waitingForChilds";
    HorizonViewTaskState["WAITINGTODO"] = "waitingTodo";
})(HorizonViewTaskState = exports.HorizonViewTaskState || (exports.HorizonViewTaskState = {}));
/*
 * All zones a Cloud Desktop Infrastructure can be in
 */
var HorizonViewZone;
(function (HorizonViewZone) {
    HorizonViewZone["BEAUHARNOIS"] = "Beauharnois";
    HorizonViewZone["ROUBAIX"] = "Roubaix";
    HorizonViewZone["STRASBOURG"] = "Strasbourg";
})(HorizonViewZone = exports.HorizonViewZone || (exports.HorizonViewZone = {}));
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
class HorizonView {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the HORIZONVIEW service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView#GET)
     */
    ListAvailableServices() {
        let url = `/horizonView`;
        return this.client.request('GET', url);
    }
    /**
     * Cloud Desktop Infrastructure Datacenter [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/horizonView/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * List the horizonView.Pool objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint#GET)
     */
    PoolAssociatedWithThisDatacenter(serviceName) {
        let url = `/horizonView/${serviceName}/accessPoint`;
        return this.client.request('GET', url);
    }
    /**
     * List the horizonView.Pool objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint#POST)
     */
    AddNewAccessPointToCreateANewNetwork(poolType, serviceName, privateBlock, privateVlan, vrouterPoolPublicIp) {
        let url = `/horizonView/${serviceName}/accessPoint`;
        return this.client.request('POST', url, { poolType, privateBlock, privateVlan, vrouterPoolPublicIp });
    }
    /**
     * All informations about access point [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D#GET)
     */
    /*
    GetThisObjectProperties(accessPointId: number, serviceName: string): Promise<HorizonViewPool> {
      let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}`
  
      return this.client.request<HorizonViewPool>('GET', url)
    }
    */
    /**
     * All informations about access point [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D#DELETE)
     */
    DeleteThisAccessPoint(accessPointId, serviceName) {
        let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changeSessionTimeout operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/changeSessionTimeout#POST)
     */
    ManageYourSessionTimeoutOnUnifiedAccessGateway(accessPointId, expiration, serviceName, onSingleAP) {
        let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/changeSessionTimeout`;
        return this.client.request('POST', url, { expiration, onSingleAP });
    }
    /**
     * List the horizonView.CustomerNetworkPool objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/customerNetwork#GET)
     */
    YouCanReachFromTheDesktopsYourPrivateNetwork(accessPointId, serviceName) {
        let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork`;
        return this.client.request('GET', url);
    }
    /**
     * List the horizonView.CustomerNetworkPool objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/customerNetwork#POST)
     */
    AddANewNetwork(accessPointId, network, serviceName) {
        let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork`;
        return this.client.request('POST', url, { network });
    }
    /**
     * You can reach from your virtual desktops, your customer network  [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/customerNetwork/%7BcustomerNetworkId%7D#GET)
     */
    /*
    GetThisObjectProperties(accessPointId: number, customerNetworkId: number, serviceName: string): Promise<HorizonViewCustomerNetworkPool> {
      let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork/${customerNetworkId}`
  
      return this.client.request<HorizonViewCustomerNetworkPool>('GET', url)
    }
    */
    /**
     * You can reach from your virtual desktops, your customer network  [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/customerNetwork/%7BcustomerNetworkId%7D#DELETE)
     */
    DeleteThisCustomerNetwork(accessPointId, customerNetworkId, serviceName) {
        let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork/${customerNetworkId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * disableTwoFA operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/disableTwoFA#POST)
     */
    DisableTwoFactorAuthenticationOnYourPool(accessPointId, serviceName) {
        let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/disableTwoFA`;
        return this.client.request('POST', url);
    }
    /**
     * disableWindowsUsernameOption operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/disableWindowsUsernameOption#POST)
     */
    DisableWindowsUsernameOptionOnUnifiedAccessGateway(accessPointId, serviceName, onSingleAP) {
        let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/disableWindowsUsernameOption`;
        return this.client.request('POST', url, { onSingleAP });
    }
    /**
     * enableTwoFA operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/enableTwoFA#POST)
     */
    EnableTwoFactorAuthenticationOnYourPool(accessPointId, radiusIp, secret, serviceName, onSingleAP) {
        let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/enableTwoFA`;
        return this.client.request('POST', url, { radiusIp, secret, onSingleAP });
    }
    /**
     * enableWindowsUsernameOption operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/accessPoint/%7BaccessPointId%7D/enableWindowsUsernameOption#POST)
     */
    EnableWindowsUsernameOptionOnUnifiedAccessGateway(accessPointId, serviceName, onSingleAP) {
        let url = `/horizonView/${serviceName}/accessPoint/${accessPointId}/enableWindowsUsernameOption`;
        return this.client.request('POST', url, { onSingleAP });
    }
    /**
     * Confirm termination of your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourService(serviceName, token, commentary, futureUse, reason) {
        let url = `/horizonView/${serviceName}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, futureUse, reason });
    }
    /**
     * List the horizonView.CustomerNetwork objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/customerNetwork#GET)
     */
    /*
    YouCanReachFromTheDesktopsYourPrivateNetwork(serviceName: string): Promise<number[]> {
      let url = `/horizonView/${serviceName}/customerNetwork`
  
      return this.client.request<number[]>('GET', url)
    }
    */
    /**
     * List the horizonView.CustomerNetwork objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/customerNetwork#POST)
     */
    /*
    AddANewNetwork(name: string, network: string, serviceName: string): Promise<HorizonViewTask[]> {
      let url = `/horizonView/${serviceName}/customerNetwork`
  
      return this.client.request<HorizonViewTask[]>('POST', url, {name, network})
    }
    */
    /**
     * You can reach from your virtual desktops, your customer network  [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/customerNetwork/%7BcustomerNetworkId%7D#GET)
     */
    /*
    GetThisObjectProperties(customerNetworkId: number, serviceName: string): Promise<HorizonViewCustomerNetwork> {
      let url = `/horizonView/${serviceName}/customerNetwork/${customerNetworkId}`
  
      return this.client.request<HorizonViewCustomerNetwork>('GET', url)
    }
    */
    /**
     * You can reach from your virtual desktops, your customer network  [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/customerNetwork/%7BcustomerNetworkId%7D#DELETE)
     */
    /*
    DeleteThisCustomerNetwork(customerNetworkId: number, serviceName: string): Promise<HorizonViewTask[]> {
      let url = `/horizonView/${serviceName}/customerNetwork/${customerNetworkId}`
  
      return this.client.request<HorizonViewTask[]>('DELETE', url)
    }
    */
    /**
     * Horizon View as a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<HorizonViewDedicatedHorizon> {
      let url = `/horizonView/${serviceName}/dedicatedHorizon`
  
      return this.client.request<HorizonViewDedicatedHorizon>('GET', url)
    }
    */
    /**
     * List the horizonView.CustomerUser objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser#GET)
     */
    AccountToAccessToYourPool(serviceName) {
        let url = `/horizonView/${serviceName}/dedicatedHorizon/customerUser`;
        return this.client.request('GET', url);
    }
    /**
     * List the horizonView.CustomerUser objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser#POST)
     */
    CreateANewCustomerUser(serviceName, username, email, password) {
        let url = `/horizonView/${serviceName}/dedicatedHorizon/customerUser`;
        return this.client.request('POST', url, { username, email, password });
    }
    /**
     * Horizon As A Service Customer  User [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser/%7Busername%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, username: string): Promise<HorizonViewCustomerUser> {
      let url = `/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}`
  
      return this.client.request<HorizonViewCustomerUser>('GET', url)
    }
    */
    /**
     * Horizon As A Service Customer  User [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser/%7Busername%7D#DELETE)
     */
    DeleteThisCustomerUser(serviceName, username) {
        let url = `/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/customerUser/%7Busername%7D/changePassword#POST)
     */
    ChangeHorizonViewCustomerUserPassword(serviceName, username, password) {
        let url = `/horizonView/${serviceName}/dedicatedHorizon/customerUser/${username}/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * disableStorageAccelerator operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/disableStorageAccelerator#POST)
     */
    DisableTheViewStorageAcceleratorOptionOnVCenter(serviceName) {
        let url = `/horizonView/${serviceName}/dedicatedHorizon/disableStorageAccelerator`;
        return this.client.request('POST', url);
    }
    /**
     * enableStorageAccelerator operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/enableStorageAccelerator#POST)
     */
    EnableTheViewStorageAcceleratorOptionOnVCenter(serviceName) {
        let url = `/horizonView/${serviceName}/dedicatedHorizon/enableStorageAccelerator`;
        return this.client.request('POST', url);
    }
    /**
     * List the horizonView.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/task#GET)
     */
    TasksAssociatedWithThisDedicatedHorizon(serviceName, state) {
        let url = `/horizonView/${serviceName}/dedicatedHorizon/task?`;
        const queryParams = new query_params_1.default();
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operation on a Horizon View component [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number): Promise<HorizonViewTask> {
      let url = `/horizonView/${serviceName}/dedicatedHorizon/task/${taskId}`
  
      return this.client.request<HorizonViewTask>('GET', url)
    }
    */
    /**
     * Horizon As A Service User [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/user#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<HorizonViewUser> {
      let url = `/horizonView/${serviceName}/dedicatedHorizon/user`
  
      return this.client.request<HorizonViewUser>('GET', url)
    }
    */
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/user/changePassword#POST)
     */
    ChangeHorizonViewUserPassword(serviceName, password) {
        let url = `/horizonView/${serviceName}/dedicatedHorizon/user/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * changeProperties operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/dedicatedHorizon/user/changeProperties#POST)
     */
    ChangeHorizonViewUserProperties(serviceName, email) {
        let url = `/horizonView/${serviceName}/dedicatedHorizon/user/changeProperties`;
        return this.client.request('POST', url, { email });
    }
    /**
     * List the horizonView.DomainTrust objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust#GET)
     */
    ListAllActiveDirectoriesLinkedToYourCDIActiveDirectory(serviceName) {
        let url = `/horizonView/${serviceName}/domainTrust`;
        return this.client.request('GET', url);
    }
    /**
     * List the horizonView.DomainTrust objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust#POST)
     */
    LinkYourActiveDirectoryToYourCDIActiveDirectory(activeDirectoryIP, domain, serviceName, dns1, dns2) {
        let url = `/horizonView/${serviceName}/domainTrust`;
        return this.client.request('POST', url, { activeDirectoryIP, domain, dns1, dns2 });
    }
    /**
     * List all Active Directories linked to your CDI Active Directory [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D#GET)
     */
    /*
    GetThisObjectProperties(domainTrustId: number, serviceName: string): Promise<HorizonViewDomainTrust> {
      let url = `/horizonView/${serviceName}/domainTrust/${domainTrustId}`
  
      return this.client.request<HorizonViewDomainTrust>('GET', url)
    }
    */
    /**
     * addChildDomain operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D/addChildDomain#POST)
     */
    AddAChildDomainForThisDomain(activeDirectoryIP, domain, domainTrustId, passphrase, serviceAccountPassword, serviceName) {
        let url = `/horizonView/${serviceName}/domainTrust/${domainTrustId}/addChildDomain`;
        return this.client.request('POST', url, { activeDirectoryIP, domain, passphrase, serviceAccountPassword });
    }
    /**
     * addDomainController operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D/addDomainController#POST)
     */
    AddADomainControllerForThisDomain(domain, domainControllerIp, domainTrustId, serviceName) {
        let url = `/horizonView/${serviceName}/domainTrust/${domainTrustId}/addDomainController`;
        return this.client.request('POST', url, { domain, domainControllerIp });
    }
    /**
     * addDomainUserOnComposer operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D/addDomainUserOnComposer#POST)
     */
    AddADomainUserToAddYourDesktopInYourActiveDirectory(domain, domainTrustId, password, serviceName, username) {
        let url = `/horizonView/${serviceName}/domainTrust/${domainTrustId}/addDomainUserOnComposer`;
        return this.client.request('POST', url, { domain, password, username });
    }
    /**
     * createTrust operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/domainTrust/%7BdomainTrustId%7D/createTrust#POST)
     */
    /*
    ChangeHorizonViewUserPassword(domainTrustId: number, passphrase: string, serviceAccountPassword: string, serviceName: string): Promise<HorizonViewTask> {
      let url = `/horizonView/${serviceName}/domainTrust/${domainTrustId}/createTrust`
  
      return this.client.request<HorizonViewTask>('POST', url, {passphrase, serviceAccountPassword})
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/horizonView/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/horizonView/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Terminate your service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/horizonView/%7BserviceName%7D/terminate#POST)
     */
    TerminateYourService(serviceName) {
        let url = `/horizonView/${serviceName}/terminate`;
        return this.client.request('POST', url);
    }
}
exports.HorizonView = HorizonView;
//# sourceMappingURL=horizonView.js.map