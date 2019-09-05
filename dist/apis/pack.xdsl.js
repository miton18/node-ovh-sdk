"use strict";
// GENERATED SDK for pack/xdsl API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Building type
 */
var ConnectivityeligibilityBuildingType;
(function (ConnectivityeligibilityBuildingType) {
    ConnectivityeligibilityBuildingType["BUILDING"] = "BUILDING";
    ConnectivityeligibilityBuildingType["HOUSE"] = "HOUSE";
})(ConnectivityeligibilityBuildingType = exports.ConnectivityeligibilityBuildingType || (exports.ConnectivityeligibilityBuildingType = {}));
/*
 *
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
 * AsyncTask status
 */
var PackxdslAsyncTaskStatus;
(function (PackxdslAsyncTaskStatus) {
    PackxdslAsyncTaskStatus["ERROR"] = "error";
    PackxdslAsyncTaskStatus["OK"] = "ok";
    PackxdslAsyncTaskStatus["PENDING"] = "pending";
})(PackxdslAsyncTaskStatus = exports.PackxdslAsyncTaskStatus || (exports.PackxdslAsyncTaskStatus = {}));
/*
 * Domain action
 */
var PackxdslDomainAction;
(function (PackxdslDomainAction) {
    PackxdslDomainAction["CREATE"] = "create";
    PackxdslDomainAction["TRADE"] = "trade";
    PackxdslDomainAction["TRANSFER"] = "transfer";
})(PackxdslDomainAction = exports.PackxdslDomainAction || (exports.PackxdslDomainAction = {}));
/*
 * Reasons why the promotion code can not be generated
 */
var PackxdslpromotionCodeReasonCodes;
(function (PackxdslpromotionCodeReasonCodes) {
    PackxdslpromotionCodeReasonCodes["NOMOREAVAILABLE"] = "noMoreAvailable";
    PackxdslpromotionCodeReasonCodes["OFFERNOTCOMPATIBLE"] = "offerNotCompatible";
    PackxdslpromotionCodeReasonCodes["SERVICENOTINOKSTATE"] = "serviceNotInOkState";
    PackxdslpromotionCodeReasonCodes["STILLENGAGED"] = "stillEngaged";
    PackxdslpromotionCodeReasonCodes["TASKINPROGRESS"] = "taskInProgress";
})(PackxdslpromotionCodeReasonCodes = exports.PackxdslpromotionCodeReasonCodes || (exports.PackxdslpromotionCodeReasonCodes = {}));
/*
 * Reason of a resiliation
 */
var PackxdslResiliationReason;
(function (PackxdslResiliationReason) {
    PackxdslResiliationReason["ADDRESSMOVE"] = "addressMove";
    PackxdslResiliationReason["BILLINGPROBLEMS"] = "billingProblems";
    PackxdslResiliationReason["CESSATIONOFACTIVITY"] = "cessationOfActivity";
    PackxdslResiliationReason["CHANGEOFTERMS"] = "changeOfTerms";
    PackxdslResiliationReason["FTTH"] = "ftth";
    PackxdslResiliationReason["GOTOCOMPETITOR"] = "goToCompetitor";
    PackxdslResiliationReason["OTHER"] = "other";
    PackxdslResiliationReason["TECHNICALPROBLEMS"] = "technicalProblems";
})(PackxdslResiliationReason = exports.PackxdslResiliationReason || (exports.PackxdslResiliationReason = {}));
/*
 * Service name
 */
var PackxdslServiceName;
(function (PackxdslServiceName) {
    PackxdslServiceName["DOMAIN"] = "domain";
    PackxdslServiceName["EMAILPRO"] = "emailPro";
    PackxdslServiceName["EXCHANGEACCOUNT"] = "exchangeAccount";
    PackxdslServiceName["EXCHANGEINDIVIDUAL"] = "exchangeIndividual";
    PackxdslServiceName["EXCHANGELITE"] = "exchangeLite";
    PackxdslServiceName["EXCHANGEORGANIZATION"] = "exchangeOrganization";
    PackxdslServiceName["HOSTEDEMAIL"] = "hostedEmail";
    PackxdslServiceName["HUBIC"] = "hubic";
    PackxdslServiceName["MODEM"] = "modem";
    PackxdslServiceName["OVERTHEBOXHARDWARE"] = "overTheBoxHardware";
    PackxdslServiceName["OVERTHEBOXSERVICE"] = "overTheBoxService";
    PackxdslServiceName["SITEBUILDERFULL"] = "siteBuilderFull";
    PackxdslServiceName["SITEBUILDERSTART"] = "siteBuilderStart";
    PackxdslServiceName["VOIPALIAS"] = "voipAlias";
    PackxdslServiceName["VOIPBILLINGACCOUNT"] = "voipBillingAccount";
    PackxdslServiceName["VOIPECOFAX"] = "voipEcoFax";
    PackxdslServiceName["VOIPLINE"] = "voipLine";
    PackxdslServiceName["XDSLACCESS"] = "xdslAccess";
})(PackxdslServiceName = exports.PackxdslServiceName || (exports.PackxdslServiceName = {}));
/*
 * Allowed contexts when looking for shipping addresses
 */
var PackxdslShippingAddressContext;
(function (PackxdslShippingAddressContext) {
    PackxdslShippingAddressContext["MIGRATION"] = "migration";
    PackxdslShippingAddressContext["VOIPLINE"] = "voipLine";
})(PackxdslShippingAddressContext = exports.PackxdslShippingAddressContext || (exports.PackxdslShippingAddressContext = {}));
/*
 * Status of a task.
 */
var PackxdslTaskStatus;
(function (PackxdslTaskStatus) {
    PackxdslTaskStatus["CANCELLED"] = "cancelled";
    PackxdslTaskStatus["DOING"] = "doing";
    PackxdslTaskStatus["DONE"] = "done";
    PackxdslTaskStatus["ERROR"] = "error";
    PackxdslTaskStatus["PROBLEM"] = "problem";
    PackxdslTaskStatus["TODO"] = "todo";
})(PackxdslTaskStatus = exports.PackxdslTaskStatus || (exports.PackxdslTaskStatus = {}));
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
 * Deconsolidation of the line.
 */
var Deconsolidation;
(function (Deconsolidation) {
    Deconsolidation["CREATENEIGHBOUR"] = "createNeighbour";
    Deconsolidation["CREATION"] = "creation";
    Deconsolidation["CREATIONNEIGHBOUR"] = "creationNeighbour";
    Deconsolidation["PARTIAL"] = "partial";
    Deconsolidation["TOTAL"] = "total";
})(Deconsolidation = exports.Deconsolidation || (exports.Deconsolidation = {}));
/*
 * Possible DSL technologies
 */
var DslType;
(function (DslType) {
    DslType["ADSL"] = "adsl";
    DslType["FTTH"] = "ftth";
    DslType["SDSL"] = "sdsl";
    DslType["VDSL"] = "vdsl";
})(DslType = exports.DslType || (exports.DslType = {}));
/*
 * Status of a landline
 */
var EligibilityLandlineStatus;
(function (EligibilityLandlineStatus) {
    EligibilityLandlineStatus["ACTIVE"] = "active";
    EligibilityLandlineStatus["INACTIVE"] = "inactive";
})(EligibilityLandlineStatus = exports.EligibilityLandlineStatus || (exports.EligibilityLandlineStatus = {}));
/*
 * The providers
 */
var EligibilityProvider;
(function (EligibilityProvider) {
    EligibilityProvider["AXIONE"] = "axione";
    EligibilityProvider["FT"] = "ft";
    EligibilityProvider["KOSC"] = "kosc";
    EligibilityProvider["OVH"] = "ovh";
    EligibilityProvider["SFR"] = "sfr";
})(EligibilityProvider = exports.EligibilityProvider || (exports.EligibilityProvider = {}));
class PackXdsl {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the PACK service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl#GET)
     */
    ListAvailableServices() {
        let url = `/pack/xdsl`;
        return this.client.request('GET', url);
    }
    /**
     * Pack of xDSL services [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D#GET)
     */
    GetThisObjectProperties(packName) {
        let url = `/pack/xdsl/${packName}`;
        return this.client.request('GET', url);
    }
    /**
     * Pack of xDSL services [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D#PUT)
     */
    AlterThisObjectProperties(packName, payload) {
        let url = `/pack/xdsl/${packName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * eligibility operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/addressMove/eligibility#POST)
     */
    EligibilityToMoveTheAccess(packName, address, lineNumber) {
        let url = `/pack/xdsl/${packName}/addressMove/eligibility`;
        return this.client.request('POST', url, { address, lineNumber });
    }
    /**
     * move operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/addressMove/move#POST)
     */
    MoveTheXdslAccessToAnotherAddress(keepCurrentNumber, offerCode, packName, creation, landline, moveOutDate, provider) {
        let url = `/pack/xdsl/${packName}/addressMove/move`;
        return this.client.request('POST', url, { keepCurrentNumber, offerCode, creation, landline, moveOutDate, provider });
    }
    /**
     * moveFtth operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/addressMove/moveFtth#POST)
     */
    MoveTheFTTHAccessToAnotherAddress(buildingReference, floor, otp, packName, stair, moveOutDate, otpReference) {
        let url = `/pack/xdsl/${packName}/addressMove/moveFtth`;
        return this.client.request('POST', url, { buildingReference, floor, otp, stair, moveOutDate, otpReference });
    }
    /**
     * canCancelResiliation operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/canCancelResiliation#GET)
     */
    CheckIfTheResiliationCanBeCancelled(packName) {
        let url = `/pack/xdsl/${packName}/canCancelResiliation`;
        return this.client.request('GET', url);
    }
    /**
     * cancelResiliation operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/cancelResiliation#POST)
     */
    CancelTheOngoingResiliation(packName) {
        let url = `/pack/xdsl/${packName}/cancelResiliation`;
        return this.client.request('POST', url);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(packName, contactAdmin, contactBilling, contactTech) {
        let url = `/pack/xdsl/${packName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * tlds operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/domain/options/tlds#GET)
     */
    GetTheAvailableTldsForDomainOrder(packName) {
        let url = `/pack/xdsl/${packName}/domain/options/tlds`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.DomainService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/domain/services#GET)
     */
    DomainServices(packName) {
        let url = `/pack/xdsl/${packName}/domain/services`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.DomainService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/domain/services#POST)
     */
    ActivateADomainService(action, domain, packName, tld, authInfo) {
        let url = `/pack/xdsl/${packName}/domain/services`;
        return this.client.request('POST', url, { action, domain, tld, authInfo });
    }
    /**
     * domains operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/emailPro/options/domains#GET)
     */
    ListTheAvailableDomainsForTheEmailProService(packName) {
        let url = `/pack/xdsl/${packName}/emailPro/options/domains`;
        return this.client.request('GET', url);
    }
    /**
     * isEmailAvailable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/emailPro/options/isEmailAvailable#GET)
     */
    CheckIfTheGivenEmailAddressIsAvailableForAnEmailProActivation(email, packName) {
        let url = `/pack/xdsl/${packName}/emailPro/options/isEmailAvailable?`;
        const queryParams = new query_params_1.default();
        if (email) {
            queryParams.set('email', email);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the pack.xdsl.EmailProService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/emailPro/services#GET)
     */
    ListTheEmailProServices(packName) {
        let url = `/pack/xdsl/${packName}/emailPro/services`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.EmailProService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/emailPro/services#POST)
     */
    ActivateAnEmailProService(email, packName, password) {
        let url = `/pack/xdsl/${packName}/emailPro/services`;
        return this.client.request('POST', url, { email, password });
    }
    /**
     * List the pack.xdsl.ExchangeAccountService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeAccount/services#GET)
     */
    Exchange2013Services(packName) {
        let url = `/pack/xdsl/${packName}/exchangeAccount/services`;
        return this.client.request('GET', url);
    }
    /**
     * Exchange 2013 service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeAccount/services/%7Bdomain%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, packName: string): Promise<PackxdslExchangeAccountService> {
      let url = `/pack/xdsl/${packName}/exchangeAccount/services/${domain}`
  
      return this.client.request<PackxdslExchangeAccountService>('GET', url)
    }
    */
    /**
     * domains operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeIndividual/options/domains#GET)
     */
    GetTheAvailableDomains(packName) {
        let url = `/pack/xdsl/${packName}/exchangeIndividual/options/domains`;
        return this.client.request('GET', url);
    }
    /**
     * isEmailAvailable operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeIndividual/options/isEmailAvailable#GET)
     */
    CheckIfTheEmailAddressIsAvailableForServiceCreation(email, packName) {
        let url = `/pack/xdsl/${packName}/exchangeIndividual/options/isEmailAvailable?`;
        const queryParams = new query_params_1.default();
        if (email) {
            queryParams.set('email', email);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the pack.xdsl.ExchangeIndividual objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeIndividual/services#GET)
     */
    ExchangeServices(packName) {
        let url = `/pack/xdsl/${packName}/exchangeIndividual/services`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.ExchangeIndividual objects [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeIndividual/services#POST)
     */
    ActivateAnExchangeService(email, packName, password) {
        let url = `/pack/xdsl/${packName}/exchangeIndividual/services`;
        return this.client.request('POST', url, { email, password });
    }
    /**
     * isEmailAvailable operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeLite/options/isEmailAvailable#GET)
     */
    /*
    CheckIfTheEmailAddressIsAvailableForServiceCreation(email: string, packName: string): Promise<boolean> {
      let url = `/pack/xdsl/${packName}/exchangeLite/options/isEmailAvailable?`
  
      const queryParams = new QueryParams()
      if (email) { queryParams.set('email', email) }
  
      return this.client.request<boolean>('GET', url+queryParams.toString())
    }
    */
    /**
     * List the pack.xdsl.ExchangeLiteService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeLite/services#GET)
     */
    ExchangeLiteServices(packName) {
        let url = `/pack/xdsl/${packName}/exchangeLite/services`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.ExchangeLiteService objects [DEPRECATED]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeLite/services#POST)
     */
    ActivateAExchangeLiteService(email, packName, password, antispam, displayName, firstName, initials, lastName) {
        let url = `/pack/xdsl/${packName}/exchangeLite/services`;
        return this.client.request('POST', url, { email, password, antispam, displayName, firstName, initials, lastName });
    }
    /**
     * Exchange account service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeLite/services/%7Bdomain%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, packName: string): Promise<PackxdslExchangeLiteService> {
      let url = `/pack/xdsl/${packName}/exchangeLite/services/${domain}`
  
      return this.client.request<PackxdslExchangeLiteService>('GET', url)
    }
    */
    /**
     * List the pack.xdsl.ExchangeOrganizationService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/exchangeOrganization/services#GET)
     */
    Exchange2013OrganizationServices(packName) {
        let url = `/pack/xdsl/${packName}/exchangeOrganization/services`;
        return this.client.request('GET', url);
    }
    /**
     * domains operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/hostedEmail/options/domains#GET)
     */
    GetTheHostedemailAvailableDomains(packName) {
        let url = `/pack/xdsl/${packName}/hostedEmail/options/domains`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.HostedEmailService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/hostedEmail/services#GET)
     */
    HostedEmailServices(packName) {
        let url = `/pack/xdsl/${packName}/hostedEmail/services`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.HostedEmailService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/hostedEmail/services#POST)
     */
    ActivateAnHostedEmailService(email, packName, password) {
        let url = `/pack/xdsl/${packName}/hostedEmail/services`;
        return this.client.request('POST', url, { email, password });
    }
    /**
     * List the pack.xdsl.Hubic objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/hubic/services#GET)
     */
    HubicPersoServices(packName) {
        let url = `/pack/xdsl/${packName}/hubic/services`;
        return this.client.request('GET', url);
    }
    /**
     * Hubic service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/hubic/services/%7Bdomain%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, packName: string): Promise<PackxdslHubic> {
      let url = `/pack/xdsl/${packName}/hubic/services/${domain}`
  
      return this.client.request<PackxdslHubic>('GET', url)
    }
    */
    /**
     * details operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/hubic/services/%7Bdomain%7D/details#GET)
     */
    DetailsAssociatedToAVoucher(domain, packName) {
        let url = `/pack/xdsl/${packName}/hubic/services/${domain}/details`;
        return this.client.request('GET', url);
    }
    /**
     * migrate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/migration/migrate#POST)
     */
    MigrateToTheSelectedOffer(acceptContracts, offerName, packName, buildingReference, engageMonths, floor, mondialRelayId, nicShipping, options, otp, otpReference, stair, subServicesToDelete) {
        let url = `/pack/xdsl/${packName}/migration/migrate`;
        return this.client.request('POST', url, { acceptContracts, offerName, buildingReference, engageMonths, floor, mondialRelayId, nicShipping, options, otp, otpReference, stair, subServicesToDelete });
    }
    /**
     * offers operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/migration/offers#POST)
     */
    GetThePossibilitiesOfMigrationOffersAvailable(packName) {
        let url = `/pack/xdsl/${packName}/migration/offers`;
        return this.client.request('POST', url);
    }
    /**
     * servicesToDelete operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/migration/servicesToDelete#POST)
     */
    CalculateServicesToDeleteWithNewOfferAndOptions(offerName, packName, options) {
        let url = `/pack/xdsl/${packName}/migration/servicesToDelete`;
        return this.client.request('POST', url, { offerName, options });
    }
    /**
     * capabilities operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/promotionCode/capabilities#GET)
     */
    GetInformationsAboutThePromotionCodeGeneration(packName) {
        let url = `/pack/xdsl/${packName}/promotionCode/capabilities`;
        return this.client.request('GET', url);
    }
    /**
     * generate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/promotionCode/generate#POST)
     */
    CreatesATaskToGenerateANewPromotionCode(packName) {
        let url = `/pack/xdsl/${packName}/promotionCode/generate`;
        return this.client.request('POST', url);
    }
    /**
     * resiliate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/resiliate#POST)
     */
    ResiliateThePack(packName, resiliationSurvey, resiliationDate, servicesToKeep) {
        let url = `/pack/xdsl/${packName}/resiliate`;
        return this.client.request('POST', url, { resiliationSurvey, resiliationDate, servicesToKeep });
    }
    /**
     * resiliationFollowUp operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/resiliationFollowUp#GET)
     */
    GetInformationAboutTheOngoingResiliation(packName) {
        let url = `/pack/xdsl/${packName}/resiliationFollowUp`;
        return this.client.request('GET', url);
    }
    /**
     * resiliationTerms operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/resiliationTerms#GET)
     */
    GetResiliationTerms(packName, resiliationDate) {
        let url = `/pack/xdsl/${packName}/resiliationTerms?`;
        const queryParams = new query_params_1.default();
        if (resiliationDate) {
            queryParams.set('resiliationDate', resiliationDate.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(packName: string): Promise<ServicesService> {
      let url = `/pack/xdsl/${packName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(packName: string, payload: ServicesService): Promise<void> {
      let url = `/pack/xdsl/${packName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * services operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/services#GET)
     */
    InformationsAboutTheServicesIncludedInThePack(packName) {
        let url = `/pack/xdsl/${packName}/services`;
        return this.client.request('GET', url);
    }
    /**
     * shippingAddresses operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/shippingAddresses#GET)
     */
    AllowedShippingAddressesGivenAContext(context, packName) {
        let url = `/pack/xdsl/${packName}/shippingAddresses?`;
        const queryParams = new query_params_1.default();
        if (context) {
            queryParams.set('context', context.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * domains operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderFull/options/domains#GET)
     */
    /*
    GetTheAvailableDomains(packName: string): Promise<PackxdslSiteBuilderDomain[]> {
      let url = `/pack/xdsl/${packName}/siteBuilderFull/options/domains`
  
      return this.client.request<PackxdslSiteBuilderDomain[]>('GET', url)
    }
    */
    /**
     * templates operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderFull/options/templates#GET)
     */
    GetTheAvailableTemplates(packName) {
        let url = `/pack/xdsl/${packName}/siteBuilderFull/options/templates`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.SiteBuilderFullService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderFull/services#GET)
     */
    SitebuilderFullServices(packName) {
        let url = `/pack/xdsl/${packName}/siteBuilderFull/services`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.SiteBuilderFullService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderFull/services#POST)
     */
    ActivateASitebuilderFullService(domain, packName, subdomain, templateId) {
        let url = `/pack/xdsl/${packName}/siteBuilderFull/services`;
        return this.client.request('POST', url, { domain, subdomain, templateId });
    }
    /**
     * domains operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderStart/options/domains#GET)
     */
    /*
    GetTheAvailableDomains(packName: string): Promise<PackxdslSiteBuilderDomain[]> {
      let url = `/pack/xdsl/${packName}/siteBuilderStart/options/domains`
  
      return this.client.request<PackxdslSiteBuilderDomain[]>('GET', url)
    }
    */
    /**
     * templates operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderStart/options/templates#GET)
     */
    /*
    GetTheAvailableTemplates(packName: string): Promise<PackxdslSiteBuilderTemplate[]> {
      let url = `/pack/xdsl/${packName}/siteBuilderStart/options/templates`
  
      return this.client.request<PackxdslSiteBuilderTemplate[]>('GET', url)
    }
    */
    /**
     * List the pack.xdsl.SiteBuilderStartService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderStart/services#GET)
     */
    SitebuilderStartServices(packName) {
        let url = `/pack/xdsl/${packName}/siteBuilderStart/services`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.SiteBuilderStartService objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/siteBuilderStart/services#POST)
     */
    /*
    ActivateASitebuilderFullService(domain: string, packName: string, subdomain: string, templateId: number): Promise<PackxdslTask> {
      let url = `/pack/xdsl/${packName}/siteBuilderStart/services`
  
      return this.client.request<PackxdslTask>('POST', url, {domain, subdomain, templateId})
    }
    */
    /**
     * List the pack.xdsl.Service objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/subServices#GET)
     */
    ListServicesContainedInThePack(packName) {
        let url = `/pack/xdsl/${packName}/subServices`;
        return this.client.request('GET', url);
    }
    /**
     * Service link to the pack [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/subServices/%7Bdomain%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, packName: string): Promise<PackxdslService> {
      let url = `/pack/xdsl/${packName}/subServices/${domain}`
  
      return this.client.request<PackxdslService>('GET', url)
    }
    */
    /**
     * keepServiceTerms operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/subServices/%7Bdomain%7D/keepServiceTerms#GET)
     */
    GiveTheConditionToUnpackServiceFromPack(domain, packName) {
        let url = `/pack/xdsl/${packName}/subServices/${domain}/keepServiceTerms`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/tasks#GET)
     */
    TasksScheduledForThisPack(packName, _function, status) {
        let url = `/pack/xdsl/${packName}/tasks?`;
        const queryParams = new query_params_1.default();
        if (_function) {
            queryParams.set('function', _function);
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Describes the current status of a task [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/tasks/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, packName: string): Promise<PackxdslTask> {
      let url = `/pack/xdsl/${packName}/tasks/${id}`
  
      return this.client.request<PackxdslTask>('GET', url)
    }
    */
    /**
     * List the pack.xdsl.BillingAccountService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipBillingAccount/services#GET)
     */
    VOIPBillingAccounts(packName) {
        let url = `/pack/xdsl/${packName}/voipBillingAccount/services`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.VoipEcoFaxService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipEcofax/services#GET)
     */
    VOIPEcofaxService(packName) {
        let url = `/pack/xdsl/${packName}/voipEcofax/services`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.VoipEcoFaxService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipEcofax/services#POST)
     */
    ActivateAVoicefaxService(packName) {
        let url = `/pack/xdsl/${packName}/voipEcofax/services`;
        return this.client.request('POST', url);
    }
    /**
     * customShippingAddress operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipLine/options/customShippingAddress#POST)
     */
    CreateANewShippingIdToBeUsedForVoipLineServiceCreation(address, cityName, firstName, lastName, packName, zipCode) {
        let url = `/pack/xdsl/${packName}/voipLine/options/customShippingAddress`;
        return this.client.request('POST', url, { address, cityName, firstName, lastName, zipCode });
    }
    /**
     * hardwares operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipLine/options/hardwares#GET)
     */
    GetAvailableHardwares(packName) {
        let url = `/pack/xdsl/${packName}/voipLine/options/hardwares`;
        return this.client.request('GET', url);
    }
    /**
     * shippingAddresses operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipLine/options/shippingAddresses#GET)
     */
    GetAvailableShippingAddresses(packName) {
        let url = `/pack/xdsl/${packName}/voipLine/options/shippingAddresses`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.VoipLineService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipLine/services#GET)
     */
    VOIPLineServices(packName) {
        let url = `/pack/xdsl/${packName}/voipLine/services`;
        return this.client.request('GET', url);
    }
    /**
     * List the pack.xdsl.VoipLineService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipLine/services#POST)
     */
    ActivateAVoipLineService(hardwareNames, packName, mondialRelayId, shippingId) {
        let url = `/pack/xdsl/${packName}/voipLine/services`;
        return this.client.request('POST', url, { hardwareNames, mondialRelayId, shippingId });
    }
    /**
     * VOIP line services [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/voipLine/services/%7Bdomain%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, packName: string): Promise<PackxdslVoipLineService> {
      let url = `/pack/xdsl/${packName}/voipLine/services/${domain}`
  
      return this.client.request<PackxdslVoipLineService>('GET', url)
    }
    */
    /**
     * List the pack.xdsl.XdslAccessService objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/xdsl/%7BpackName%7D/xdslAccess/services#GET)
     */
    XDSLAccessServices(packName) {
        let url = `/pack/xdsl/${packName}/xdslAccess/services`;
        return this.client.request('GET', url);
    }
}
exports.PackXdsl = PackXdsl;
//# sourceMappingURL=pack.xdsl.js.map