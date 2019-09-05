"use strict";
// GENERATED SDK for email/domain API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Possible values for filter action
 */
var DomainDomainFilterAction;
(function (DomainDomainFilterAction) {
    DomainDomainFilterAction["ACCEPT"] = "accept";
    DomainDomainFilterAction["ACCOUNT"] = "account";
    DomainDomainFilterAction["DELETE"] = "delete";
    DomainDomainFilterAction["REDIRECT"] = "redirect";
})(DomainDomainFilterAction = exports.DomainDomainFilterAction || (exports.DomainDomainFilterAction = {}));
/*
 * Possible values for filter operation
 */
var DomainDomainFilterOperand;
(function (DomainDomainFilterOperand) {
    DomainDomainFilterOperand["CHECKSPF"] = "checkspf";
    DomainDomainFilterOperand["CONTAINS"] = "contains";
    DomainDomainFilterOperand["NOCONTAINS"] = "noContains";
})(DomainDomainFilterOperand = exports.DomainDomainFilterOperand || (exports.DomainDomainFilterOperand = {}));
/*
 * Possible values for mailing list language
 */
var DomainDomainMlLanguage;
(function (DomainDomainMlLanguage) {
    DomainDomainMlLanguage["DE"] = "de";
    DomainDomainMlLanguage["EN"] = "en";
    DomainDomainMlLanguage["ES"] = "es";
    DomainDomainMlLanguage["FR"] = "fr";
    DomainDomainMlLanguage["IT"] = "it";
    DomainDomainMlLanguage["NL"] = "nl";
    DomainDomainMlLanguage["PL"] = "pl";
    DomainDomainMlLanguage["PT"] = "pt";
})(DomainDomainMlLanguage = exports.DomainDomainMlLanguage || (exports.DomainDomainMlLanguage = {}));
/*
 * Possible values for MX filter
 */
var DomainDomainMXFilter;
(function (DomainDomainMXFilter) {
    DomainDomainMXFilter["CUSTOM"] = "CUSTOM";
    DomainDomainMXFilter["FULL_FILTERING"] = "FULL_FILTERING";
    DomainDomainMXFilter["NO_FILTERING"] = "NO_FILTERING";
    DomainDomainMXFilter["REDIRECT"] = "REDIRECT";
    DomainDomainMXFilter["SIMPLE_FILTERING"] = "SIMPLE_FILTERING";
})(DomainDomainMXFilter = exports.DomainDomainMXFilter || (exports.DomainDomainMXFilter = {}));
/*
 * Possible values for pop action task
 */
var DomainDomainPopAction;
(function (DomainDomainPopAction) {
    DomainDomainPopAction["ADDACCOUNT"] = "addAccount";
    DomainDomainPopAction["CHANGEACCOUNT"] = "changeAccount";
    DomainDomainPopAction["CHANGEPASSWORD"] = "changePassword";
    DomainDomainPopAction["DELETEACCOUNT"] = "deleteAccount";
    DomainDomainPopAction["INTERNALMIGRATION"] = "internalMigration";
    DomainDomainPopAction["MIGRATION"] = "migration";
    DomainDomainPopAction["TEMPORARYTASK"] = "temporaryTask";
    DomainDomainPopAction["UNKNOWN"] = "unknown";
})(DomainDomainPopAction = exports.DomainDomainPopAction || (exports.DomainDomainPopAction = {}));
/*
 * Possible values for pop action task
 */
var DomainDomainSpecialAccountAction;
(function (DomainDomainSpecialAccountAction) {
    DomainDomainSpecialAccountAction["ADD"] = "add";
    DomainDomainSpecialAccountAction["CHANGE"] = "change";
    DomainDomainSpecialAccountAction["DELETE"] = "delete";
})(DomainDomainSpecialAccountAction = exports.DomainDomainSpecialAccountAction || (exports.DomainDomainSpecialAccountAction = {}));
/*
 * Possible values for status domain
 */
var DomainDomainStatus;
(function (DomainDomainStatus) {
    DomainDomainStatus["CLOSE"] = "close";
    DomainDomainStatus["OK"] = "ok";
    DomainDomainStatus["READONLY"] = "readOnly";
    DomainDomainStatus["UNKNOWN"] = "unknown";
})(DomainDomainStatus = exports.DomainDomainStatus || (exports.DomainDomainStatus = {}));
/*
 * Function of diagnose
 */
var EmaildomainDomainDiagnoseFunction;
(function (EmaildomainDomainDiagnoseFunction) {
    EmaildomainDomainDiagnoseFunction["MX"] = "MX";
})(EmaildomainDomainDiagnoseFunction = exports.EmaildomainDomainDiagnoseFunction || (exports.EmaildomainDomainDiagnoseFunction = {}));
/*
 * Result of diagnose
 */
var EmaildomainDomainDiagnoseResult;
(function (EmaildomainDomainDiagnoseResult) {
    EmaildomainDomainDiagnoseResult["CUSTOM"] = "CUSTOM";
    EmaildomainDomainDiagnoseResult["DEPRECATED"] = "DEPRECATED";
    EmaildomainDomainDiagnoseResult["KO"] = "KO";
    EmaildomainDomainDiagnoseResult["OK"] = "OK";
})(EmaildomainDomainDiagnoseResult = exports.EmaildomainDomainDiagnoseResult || (exports.EmaildomainDomainDiagnoseResult = {}));
/*
 * Result code of check migration
 */
var EmaildomainMigrationCheckCode;
(function (EmaildomainMigrationCheckCode) {
    EmaildomainMigrationCheckCode["ACCOUNT_EMPTY"] = "ACCOUNT_EMPTY";
    EmaildomainMigrationCheckCode["ACCOUNT_INPROGRESS"] = "ACCOUNT_INPROGRESS";
    EmaildomainMigrationCheckCode["DELEGATION_EXIST"] = "DELEGATION_EXIST";
    EmaildomainMigrationCheckCode["DOMAIN_EMPTY"] = "DOMAIN_EMPTY";
    EmaildomainMigrationCheckCode["FILTER_EXIST"] = "FILTER_EXIST";
    EmaildomainMigrationCheckCode["FORWARD_EXIST"] = "FORWARD_EXIST";
    EmaildomainMigrationCheckCode["FORWARD_LOCAL"] = "FORWARD_LOCAL";
    EmaildomainMigrationCheckCode["MAILINGLIST_EXIST"] = "MAILINGLIST_EXIST";
    EmaildomainMigrationCheckCode["MAILINGLIST_INPROGRESS"] = "MAILINGLIST_INPROGRESS";
    EmaildomainMigrationCheckCode["MAILPROXY_BAD_INFRA"] = "MAILPROXY_BAD_INFRA";
    EmaildomainMigrationCheckCode["MAILPROXY_EMPTY"] = "MAILPROXY_EMPTY";
    EmaildomainMigrationCheckCode["MAILPROXY_INPROGRESS"] = "MAILPROXY_INPROGRESS";
    EmaildomainMigrationCheckCode["MAILPROXY_RESERVATION"] = "MAILPROXY_RESERVATION";
    EmaildomainMigrationCheckCode["REDIRECTION_INPROGRESS"] = "REDIRECTION_INPROGRESS";
    EmaildomainMigrationCheckCode["RESPONDER_EXIST"] = "RESPONDER_EXIST";
    EmaildomainMigrationCheckCode["RESPONDER_INPROGRESS"] = "RESPONDER_INPROGRESS";
    EmaildomainMigrationCheckCode["UNKNOW"] = "UNKNOW";
})(EmaildomainMigrationCheckCode = exports.EmaildomainMigrationCheckCode || (exports.EmaildomainMigrationCheckCode = {}));
/*
 * Types of migration service
 */
var EmaildomainMigrationServiceType;
(function (EmaildomainMigrationServiceType) {
    EmaildomainMigrationServiceType["EMAIL_PRO"] = "EMAIL PRO";
    EmaildomainMigrationServiceType["HOSTED_EXCHANGE"] = "HOSTED EXCHANGE";
    EmaildomainMigrationServiceType["PRIVATE_EXCHANGE"] = "PRIVATE EXCHANGE";
    EmaildomainMigrationServiceType["PROVIDER_EXCHANGE"] = "PROVIDER EXCHANGE";
})(EmaildomainMigrationServiceType = exports.EmaildomainMigrationServiceType || (exports.EmaildomainMigrationServiceType = {}));
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
/*
 * Resource record fieldType
 */
var ZoneNamedResolutionFieldType;
(function (ZoneNamedResolutionFieldType) {
    ZoneNamedResolutionFieldType["A"] = "A";
    ZoneNamedResolutionFieldType["AAAA"] = "AAAA";
    ZoneNamedResolutionFieldType["CAA"] = "CAA";
    ZoneNamedResolutionFieldType["CNAME"] = "CNAME";
    ZoneNamedResolutionFieldType["DKIM"] = "DKIM";
    ZoneNamedResolutionFieldType["DMARC"] = "DMARC";
    ZoneNamedResolutionFieldType["LOC"] = "LOC";
    ZoneNamedResolutionFieldType["MX"] = "MX";
    ZoneNamedResolutionFieldType["NAPTR"] = "NAPTR";
    ZoneNamedResolutionFieldType["NS"] = "NS";
    ZoneNamedResolutionFieldType["PTR"] = "PTR";
    ZoneNamedResolutionFieldType["SPF"] = "SPF";
    ZoneNamedResolutionFieldType["SRV"] = "SRV";
    ZoneNamedResolutionFieldType["SSHFP"] = "SSHFP";
    ZoneNamedResolutionFieldType["TLSA"] = "TLSA";
    ZoneNamedResolutionFieldType["TXT"] = "TXT";
})(ZoneNamedResolutionFieldType = exports.ZoneNamedResolutionFieldType || (exports.ZoneNamedResolutionFieldType = {}));
class EmailDomain {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the MX service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain#GET)
     */
    ListAvailableServices() {
        let url = `/email/domain`;
        return this.client.request('GET', url);
    }
    /**
     * Domain service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D#GET)
     */
    GetThisObjectProperties(domain) {
        let url = `/email/domain/${domain}`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.domain.Account objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account#GET)
     */
    GetAccounts(domain, accountName, description) {
        let url = `/email/domain/${domain}/account?`;
        const queryParams = new query_params_1.default();
        if (accountName) {
            queryParams.set('accountName', accountName);
        }
        if (description) {
            queryParams.set('description', description);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.domain.Account objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account#POST)
     */
    CreateNewMailboxInServer(accountName, domain, password, description, size) {
        let url = `/email/domain/${domain}/account`;
        return this.client.request('POST', url, { accountName, password, description, size });
    }
    /**
     * Account List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D#GET)
     */
    /*
    GetThisObjectProperties(accountName: string, domain: string): Promise<EmaildomainAccount> {
      let url = `/email/domain/${domain}/account/${accountName}`
  
      return this.client.request<EmaildomainAccount>('GET', url)
    }
    */
    /**
     * Account List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D#PUT)
     */
    AlterThisObjectProperties(accountName, domain, payload) {
        let url = `/email/domain/${domain}/account/${accountName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Account List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D#DELETE)
     */
    DeleteAnExistingMailboxInServer(accountName, domain) {
        let url = `/email/domain/${domain}/account/${accountName}`;
        return this.client.request('DELETE', url);
    }
    NoSpaceAtBeginAndEndNoAccent(accountName, domain, password) {
        let url = `/email/domain/${domain}/account/${accountName}/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * List the email.domain.Delegation objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/delegation#GET)
     */
    GetDelegations(accountName, domain) {
        let url = `/email/domain/${domain}/account/${accountName}/delegation`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.domain.Delegation objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/delegation#POST)
     */
    CreateDelegationForThisAccount(accountId, accountName, domain) {
        let url = `/email/domain/${domain}/account/${accountName}/delegation`;
        return this.client.request('POST', url, { accountId });
    }
    /**
     * Delegation List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/delegation/%7BaccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(accountId: string, accountName: string, domain: string): Promise<EmaildomainDelegation> {
      let url = `/email/domain/${domain}/account/${accountName}/delegation/${accountId}`
  
      return this.client.request<EmaildomainDelegation>('GET', url)
    }
    */
    /**
     * Delegation List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/delegation/%7BaccountId%7D#DELETE)
     */
    DeleteAnExistingDelegation(accountId, accountName, domain) {
        let url = `/email/domain/${domain}/account/${accountName}/delegation/${accountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.domain.Filter objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter#GET)
     */
    GetFilters(accountName, domain) {
        let url = `/email/domain/${domain}/account/${accountName}/filter`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.domain.Filter objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter#POST)
     */
    CreateNewFilterForAccount(accountName, action, active, domain, header, name, operand, priority, value, actionParam) {
        let url = `/email/domain/${domain}/account/${accountName}/filter`;
        return this.client.request('POST', url, { action, active, header, name, operand, priority, value, actionParam });
    }
    /**
     * Filter List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(accountName: string, domain: string, name: string): Promise<EmaildomainFilter> {
      let url = `/email/domain/${domain}/account/${accountName}/filter/${name}`
  
      return this.client.request<EmaildomainFilter>('GET', url)
    }
    */
    /**
     * Filter List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D#DELETE)
     */
    DeleteAnExistingFilter(accountName, domain, name) {
        let url = `/email/domain/${domain}/account/${accountName}/filter/${name}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changeActivity operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/changeActivity#POST)
     */
    ChangeFilterActivity(accountName, activity, domain, name) {
        let url = `/email/domain/${domain}/account/${accountName}/filter/${name}/changeActivity`;
        return this.client.request('POST', url, { activity });
    }
    /**
     * changePriority operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/changePriority#POST)
     */
    ChangeFilterPriority(accountName, domain, name, priority) {
        let url = `/email/domain/${domain}/account/${accountName}/filter/${name}/changePriority`;
        return this.client.request('POST', url, { priority });
    }
    /**
     * List the email.domain.Rule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/rule#GET)
     */
    GetRules(accountName, domain, name) {
        let url = `/email/domain/${domain}/account/${accountName}/filter/${name}/rule`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.domain.Rule objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/rule#POST)
     */
    CreateNewRuleForFilter(accountName, domain, header, name, operand, value) {
        let url = `/email/domain/${domain}/account/${accountName}/filter/${name}/rule`;
        return this.client.request('POST', url, { header, operand, value });
    }
    /**
     * Rule List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/rule/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(accountName: string, domain: string, id: number, name: string): Promise<EmaildomainRule> {
      let url = `/email/domain/${domain}/account/${accountName}/filter/${name}/rule/${id}`
  
      return this.client.request<EmaildomainRule>('GET', url)
    }
    */
    /**
     * Rule List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/filter/%7Bname%7D/rule/%7Bid%7D#DELETE)
     */
    /*
    DeleteAnExistingFilter(accountName: string, domain: string, id: number, name: string): Promise<EmaildomainTaskFilter[]> {
      let url = `/email/domain/${domain}/account/${accountName}/filter/${name}/rule/${id}`
  
      return this.client.request<EmaildomainTaskFilter[]>('DELETE', url)
    }
    */
    /**
     * List the email.domain.MigrationService objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate#GET)
     */
    GetMigrationService(accountName, domain, type) {
        let url = `/email/domain/${domain}/account/${accountName}/migrate?`;
        const queryParams = new query_params_1.default();
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Migration service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D#GET)
     */
    /*
    GetThisObjectProperties(accountName: string, destinationServiceName: string, domain: string): Promise<EmaildomainMigrationService> {
      let url = `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}`
  
      return this.client.request<EmaildomainMigrationService>('GET', url)
    }
    */
    /**
     * List the email.domain.MigrationAccount objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D/destinationEmailAddress#GET)
     */
    ListOfEmailAddressAvailableForMigration(accountName, destinationServiceName, domain, quota) {
        let url = `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}/destinationEmailAddress?`;
        const queryParams = new query_params_1.default();
        if (quota) {
            queryParams.set('quota', quota.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Migration account [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D/destinationEmailAddress/%7BdestinationEmailAddress%7D#GET)
     */
    /*
    GetThisObjectProperties(accountName: string, destinationEmailAddress: string, destinationServiceName: string, domain: string): Promise<EmaildomainMigrationAccount> {
      let url = `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}/destinationEmailAddress/${destinationEmailAddress}`
  
      return this.client.request<EmaildomainMigrationAccount>('GET', url)
    }
    */
    /**
     * checkMigrate operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D/destinationEmailAddress/%7BdestinationEmailAddress%7D/checkMigrate#GET)
     */
    CheckIfItPossibleToMigrate(accountName, destinationEmailAddress, destinationServiceName, domain) {
        let url = `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}/destinationEmailAddress/${destinationEmailAddress}/checkMigrate`;
        return this.client.request('GET', url);
    }
    /**
     * migrate operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/migrate/%7BdestinationServiceName%7D/destinationEmailAddress/%7BdestinationEmailAddress%7D/migrate#POST)
     */
    MigrateAccountToDestinationAccount(accountName, destinationEmailAddress, destinationServiceName, domain, password) {
        let url = `/email/domain/${domain}/account/${accountName}/migrate/${destinationServiceName}/destinationEmailAddress/${destinationEmailAddress}/migrate`;
        return this.client.request('POST', url, { password });
    }
    /**
     * updateUsage operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/updateUsage#POST)
     */
    UpdateUsageOfAccount(accountName, domain) {
        let url = `/email/domain/${domain}/account/${accountName}/updateUsage`;
        return this.client.request('POST', url);
    }
    /**
     * usage operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/account/%7BaccountName%7D/usage#GET)
     */
    UsageOfAccount(accountName, domain) {
        let url = `/email/domain/${domain}/account/${accountName}/usage`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.domain.Acl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/acl#GET)
     */
    GetACLOnYourDomain(domain) {
        let url = `/email/domain/${domain}/acl`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.domain.Acl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/acl#POST)
     */
    CreateNewACL(accountId, domain) {
        let url = `/email/domain/${domain}/acl`;
        return this.client.request('POST', url, { accountId });
    }
    /**
     * Email ACL [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/acl/%7BaccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(accountId: string, domain: string): Promise<EmaildomainAcl> {
      let url = `/email/domain/${domain}/acl/${accountId}`
  
      return this.client.request<EmaildomainAcl>('GET', url)
    }
    */
    /**
     * Email ACL [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/acl/%7BaccountId%7D#DELETE)
     */
    DeleteACL(accountId, domain) {
        let url = `/email/domain/${domain}/acl/${accountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(domain, contactAdmin, contactBilling, contactTech) {
        let url = `/email/domain/${domain}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * changeDnsMXFilter operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/changeDnsMXFilter#POST)
     */
    ChangeMXFilterSoChangeMXDNSRecords(domain, mxFilter, customTarget, subDomain) {
        let url = `/email/domain/${domain}/changeDnsMXFilter`;
        return this.client.request('POST', url, { mxFilter, customTarget, subDomain });
    }
    /**
     * confirmTermination operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/confirmTermination#POST)
     */
    ConfirmTerminationOfYourEmailService(domain, token, commentary, reason) {
        let url = `/email/domain/${domain}/confirmTermination`;
        return this.client.request('POST', url, { token, commentary, reason });
    }
    /**
     * dnsMXFilter operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/dnsMXFilter#GET)
     */
    DomainMXFilter(domain, subDomain) {
        let url = `/email/domain/${domain}/dnsMXFilter?`;
        const queryParams = new query_params_1.default();
        if (subDomain) {
            queryParams.set('subDomain', subDomain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * dnsMXRecords operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/dnsMXRecords#GET)
     */
    DomainMXRecords(domain, subDomain) {
        let url = `/email/domain/${domain}/dnsMXRecords?`;
        const queryParams = new query_params_1.default();
        if (subDomain) {
            queryParams.set('subDomain', subDomain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.domain.MailingList objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList#GET)
     */
    GetMailingLists(domain, name) {
        let url = `/email/domain/${domain}/mailingList?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.domain.MailingList objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList#POST)
     */
    CreateNewMailingList(domain, language, name, options, ownerEmail, replyTo) {
        let url = `/email/domain/${domain}/mailingList`;
        return this.client.request('POST', url, { language, name, options, ownerEmail, replyTo });
    }
    /**
     * Mailing List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, name: string): Promise<EmaildomainMailingList> {
      let url = `/email/domain/${domain}/mailingList/${name}`
  
      return this.client.request<EmaildomainMailingList>('GET', url)
    }
    */
    /**
     * Mailing List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D#PUT)
     */
    /*
    AlterThisObjectProperties(domain: string, name: string, payload: EmaildomainMailingList): Promise<void> {
      let url = `/email/domain/${domain}/mailingList/${name}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Mailing List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D#DELETE)
     */
    DeleteExistingMailingList(domain, name) {
        let url = `/email/domain/${domain}/mailingList/${name}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changeOptions operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/changeOptions#POST)
     */
    ChangeMailingListOptions(domain, name, options) {
        let url = `/email/domain/${domain}/mailingList/${name}/changeOptions`;
        return this.client.request('POST', url, { options });
    }
    /**
     * List the email.domain.Moderator objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/moderator#GET)
     */
    ListOfModerators(domain, name, email) {
        let url = `/email/domain/${domain}/mailingList/${name}/moderator?`;
        const queryParams = new query_params_1.default();
        if (email) {
            queryParams.set('email', email);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.domain.Moderator objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/moderator#POST)
     */
    AddModeratorToMailingList(domain, email, name) {
        let url = `/email/domain/${domain}/mailingList/${name}/moderator`;
        return this.client.request('POST', url, { email });
    }
    /**
     * Moderators List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/moderator/%7Bemail%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, email: string, name: string): Promise<EmaildomainModerator> {
      let url = `/email/domain/${domain}/mailingList/${name}/moderator/${email}`
  
      return this.client.request<EmaildomainModerator>('GET', url)
    }
    */
    /**
     * Moderators List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/moderator/%7Bemail%7D#DELETE)
     */
    DeleteExistingModerator(domain, email, name) {
        let url = `/email/domain/${domain}/mailingList/${name}/moderator/${email}`;
        return this.client.request('DELETE', url);
    }
    /**
     * sendListByEmail operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/sendListByEmail#POST)
     */
    SendModeratorsListAndSubscribersListOfThisMailingListByEmail(domain, email, name) {
        let url = `/email/domain/${domain}/mailingList/${name}/sendListByEmail`;
        return this.client.request('POST', url, { email });
    }
    /**
     * List the email.domain.Subscriber objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/subscriber#GET)
     */
    ListOfSubscribers(domain, name, email) {
        let url = `/email/domain/${domain}/mailingList/${name}/subscriber?`;
        const queryParams = new query_params_1.default();
        if (email) {
            queryParams.set('email', email);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.domain.Subscriber objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/subscriber#POST)
     */
    AddSubscriberToMailingList(domain, email, name) {
        let url = `/email/domain/${domain}/mailingList/${name}/subscriber`;
        return this.client.request('POST', url, { email });
    }
    /**
     * Subscribers List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/subscriber/%7Bemail%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, email: string, name: string): Promise<EmaildomainSubscriber> {
      let url = `/email/domain/${domain}/mailingList/${name}/subscriber/${email}`
  
      return this.client.request<EmaildomainSubscriber>('GET', url)
    }
    */
    /**
     * Subscribers List [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/mailingList/%7Bname%7D/subscriber/%7Bemail%7D#DELETE)
     */
    DeleteExistingSubscriber(domain, email, name) {
        let url = `/email/domain/${domain}/mailingList/${name}/subscriber/${email}`;
        return this.client.request('DELETE', url);
    }
    /**
     * migrateDelegationV3toV6 operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/migrateDelegationV3toV6#POST)
     */
    CreateDelegationOfDomainWithSameNicThanV3(domain) {
        let url = `/email/domain/${domain}/migrateDelegationV3toV6`;
        return this.client.request('POST', url);
    }
    /**
     * quota operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/quota#GET)
     */
    ListAllQuotasForThisDomain(domain) {
        let url = `/email/domain/${domain}/quota`;
        return this.client.request('GET', url);
    }
    /**
     * recommendedDNSRecords operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/recommendedDNSRecords#GET)
     */
    RecommendedDomainDNSRecords(domain) {
        let url = `/email/domain/${domain}/recommendedDNSRecords`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.domain.RedirectionGlobal objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection#GET)
     */
    GetRedirections(domain, from, to) {
        let url = `/email/domain/${domain}/redirection?`;
        const queryParams = new query_params_1.default();
        if (from) {
            queryParams.set('from', from);
        }
        if (to) {
            queryParams.set('to', to);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.domain.RedirectionGlobal objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection#POST)
     */
    CreateNewRedirectionInServer(domain, from, localCopy, to) {
        let url = `/email/domain/${domain}/redirection`;
        return this.client.request('POST', url, { from, localCopy, to });
    }
    /**
     * Global Redirection [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, id: string): Promise<EmaildomainRedirectionGlobal> {
      let url = `/email/domain/${domain}/redirection/${id}`
  
      return this.client.request<EmaildomainRedirectionGlobal>('GET', url)
    }
    */
    /**
     * Global Redirection [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection/%7Bid%7D#DELETE)
     */
    DeleteAnExistingRedirectionInServer(domain, id) {
        let url = `/email/domain/${domain}/redirection/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changeRedirection operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/redirection/%7Bid%7D/changeRedirection#POST)
     */
    ChangeRedirection(domain, id, to) {
        let url = `/email/domain/${domain}/redirection/${id}/changeRedirection`;
        return this.client.request('POST', url, { to });
    }
    /**
     * List the email.domain.Responder objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder#GET)
     */
    GetResponders(domain, account) {
        let url = `/email/domain/${domain}/responder?`;
        const queryParams = new query_params_1.default();
        if (account) {
            queryParams.set('account', account);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.domain.Responder objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder#POST)
     */
    CreateNewResponderInServer(account, content, copy, domain, copyTo, from, to) {
        let url = `/email/domain/${domain}/responder`;
        return this.client.request('POST', url, { account, content, copy, copyTo, from, to });
    }
    /**
     * Responder [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder/%7Baccount%7D#GET)
     */
    /*
    GetThisObjectProperties(account: string, domain: string): Promise<EmaildomainResponder> {
      let url = `/email/domain/${domain}/responder/${account}`
  
      return this.client.request<EmaildomainResponder>('GET', url)
    }
    */
    /**
     * Responder [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder/%7Baccount%7D#PUT)
     */
    /*
    AlterThisObjectProperties(account: string, domain: string, payload: EmaildomainResponder): Promise<void> {
      let url = `/email/domain/${domain}/responder/${account}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Responder [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/responder/%7Baccount%7D#DELETE)
     */
    DeleteAnExistingResponderInServer(account, domain) {
        let url = `/email/domain/${domain}/responder/${account}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(domain: string): Promise<ServicesService> {
      let url = `/email/domain/${domain}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(domain: string, payload: ServicesService): Promise<void> {
      let url = `/email/domain/${domain}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * summary operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/summary#GET)
     */
    SummaryForThisDomain(domain) {
        let url = `/email/domain/${domain}/summary`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.domain.TaskPop objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/account#GET)
     */
    GetAccountTasks(domain, name) {
        let url = `/email/domain/${domain}/task/account?`;
        const queryParams = new query_params_1.default();
        if (name) {
            queryParams.set('name', name);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Task Pop List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/account/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, id: number): Promise<EmaildomainTaskPop> {
      let url = `/email/domain/${domain}/task/account/${id}`
  
      return this.client.request<EmaildomainTaskPop>('GET', url)
    }
    */
    /**
     * List the email.domain.TaskFilter objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/filter#GET)
     */
    GetFilterTasks(domain, account) {
        let url = `/email/domain/${domain}/task/filter?`;
        const queryParams = new query_params_1.default();
        if (account) {
            queryParams.set('account', account);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Task filter List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/filter/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, id: number): Promise<EmaildomainTaskFilter> {
      let url = `/email/domain/${domain}/task/filter/${id}`
  
      return this.client.request<EmaildomainTaskFilter>('GET', url)
    }
    */
    /**
     * List the email.domain.TaskMl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/mailinglist#GET)
     */
    GetMailingListTasks(domain, account) {
        let url = `/email/domain/${domain}/task/mailinglist?`;
        const queryParams = new query_params_1.default();
        if (account) {
            queryParams.set('account', account);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Task Mailing List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/mailinglist/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, id: number): Promise<EmaildomainTaskMl> {
      let url = `/email/domain/${domain}/task/mailinglist/${id}`
  
      return this.client.request<EmaildomainTaskMl>('GET', url)
    }
    */
    /**
     * List the email.domain.TaskSpecialAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/redirection#GET)
     */
    GetRedirectionTasks(domain, account) {
        let url = `/email/domain/${domain}/task/redirection?`;
        const queryParams = new query_params_1.default();
        if (account) {
            queryParams.set('account', account);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Task special account List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/redirection/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, id: number): Promise<EmaildomainTaskSpecialAccount> {
      let url = `/email/domain/${domain}/task/redirection/${id}`
  
      return this.client.request<EmaildomainTaskSpecialAccount>('GET', url)
    }
    */
    /**
     * List the email.domain.TaskSpecialAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/responder#GET)
     */
    GetResponderTasks(domain, account) {
        let url = `/email/domain/${domain}/task/responder?`;
        const queryParams = new query_params_1.default();
        if (account) {
            queryParams.set('account', account);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Task special account List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/task/responder/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(domain: string, id: number): Promise<EmaildomainTaskSpecialAccount> {
      let url = `/email/domain/${domain}/task/responder/${id}`
  
      return this.client.request<EmaildomainTaskSpecialAccount>('GET', url)
    }
    */
    /**
     * terminate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/%7Bdomain%7D/terminate#POST)
     */
    TerminateYourEmailService(domain) {
        let url = `/email/domain/${domain}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * List the email.domain.AccountDelegated objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount#GET)
     */
    DelegatedEmails(accountName, domain) {
        let url = `/email/domain/delegatedAccount?`;
        const queryParams = new query_params_1.default();
        if (accountName) {
            queryParams.set('accountName', accountName);
        }
        if (domain) {
            queryParams.set('domain', domain);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Account List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D#GET)
     */
    /*
    GetThisObjectProperties(email: string): Promise<EmaildomainAccountDelegated> {
      let url = `/email/domain/delegatedAccount/${email}`
  
      return this.client.request<EmaildomainAccountDelegated>('GET', url)
    }
    */
    /**
     * Account List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D#PUT)
     */
    /*
    AlterThisObjectProperties(email: string, payload: EmaildomainAccountDelegated): Promise<void> {
      let url = `/email/domain/delegatedAccount/${email}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * changePassword operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/changePassword#POST)
     */
    /*
    ChangeMailboxPasswordLength_[9;30]NoSpaceAtBeginAndEndNoAccent(email: string, password: string): Promise<EmaildomainTaskPop> {
      let url = `/email/domain/delegatedAccount/${email}/changePassword`
  
      return this.client.request<EmaildomainTaskPop>('POST', url, {password})
    }
    */
    /**
     * List the email.domain.Filter objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter#GET)
     */
    /*
    GetFilters(email: string): Promise<string[]> {
      let url = `/email/domain/delegatedAccount/${email}/filter`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * List the email.domain.Filter objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter#POST)
     */
    /*
    CreateNewFilterForAccount(action: DomainDomainFilterAction, active: boolean, email: string, header: string, name: string, operand: DomainDomainFilterOperand, priority: number, value: string, actionParam?: string): Promise<EmaildomainTaskFilter> {
      let url = `/email/domain/delegatedAccount/${email}/filter`
  
      return this.client.request<EmaildomainTaskFilter>('POST', url, {action, active, header, name, operand, priority, value, actionParam})
    }
    */
    /**
     * Filter List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(email: string, name: string): Promise<EmaildomainFilter> {
      let url = `/email/domain/delegatedAccount/${email}/filter/${name}`
  
      return this.client.request<EmaildomainFilter>('GET', url)
    }
    */
    /**
     * Filter List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D#DELETE)
     */
    /*
    DeleteAnExistingFilter(email: string, name: string): Promise<EmaildomainTaskFilter[]> {
      let url = `/email/domain/delegatedAccount/${email}/filter/${name}`
  
      return this.client.request<EmaildomainTaskFilter[]>('DELETE', url)
    }
    */
    /**
     * changeActivity operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/changeActivity#POST)
     */
    /*
    ChangeFilterActivity(activity: boolean, email: string, name: string): Promise<EmaildomainTaskFilter> {
      let url = `/email/domain/delegatedAccount/${email}/filter/${name}/changeActivity`
  
      return this.client.request<EmaildomainTaskFilter>('POST', url, {activity})
    }
    */
    /**
     * changePriority operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/changePriority#POST)
     */
    /*
    ChangeFilterPriority(email: string, name: string, priority: number): Promise<EmaildomainTaskFilter> {
      let url = `/email/domain/delegatedAccount/${email}/filter/${name}/changePriority`
  
      return this.client.request<EmaildomainTaskFilter>('POST', url, {priority})
    }
    */
    /**
     * List the email.domain.Rule objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/rule#GET)
     */
    /*
    GetRules(email: string, name: string): Promise<number[]> {
      let url = `/email/domain/delegatedAccount/${email}/filter/${name}/rule`
  
      return this.client.request<number[]>('GET', url)
    }
    */
    /**
     * List the email.domain.Rule objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/rule#POST)
     */
    /*
    CreateNewRuleForFilter(email: string, header: string, name: string, operand: DomainDomainFilterOperand, value: string): Promise<EmaildomainTaskFilter> {
      let url = `/email/domain/delegatedAccount/${email}/filter/${name}/rule`
  
      return this.client.request<EmaildomainTaskFilter>('POST', url, {header, operand, value})
    }
    */
    /**
     * Rule List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/rule/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(email: string, id: number, name: string): Promise<EmaildomainRule> {
      let url = `/email/domain/delegatedAccount/${email}/filter/${name}/rule/${id}`
  
      return this.client.request<EmaildomainRule>('GET', url)
    }
    */
    /**
     * Rule List [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/filter/%7Bname%7D/rule/%7Bid%7D#DELETE)
     */
    /*
    DeleteAnExistingFilter(email: string, id: number, name: string): Promise<EmaildomainTaskFilter[]> {
      let url = `/email/domain/delegatedAccount/${email}/filter/${name}/rule/${id}`
  
      return this.client.request<EmaildomainTaskFilter[]>('DELETE', url)
    }
    */
    /**
     * Responder of account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/responder#GET)
     */
    /*
    GetThisObjectProperties(email: string): Promise<EmaildomainResponderAccount> {
      let url = `/email/domain/delegatedAccount/${email}/responder`
  
      return this.client.request<EmaildomainResponderAccount>('GET', url)
    }
    */
    /**
     * Responder of account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/responder#PUT)
     */
    /*
    AlterThisObjectProperties(email: string, payload: EmaildomainResponderAccount): Promise<void> {
      let url = `/email/domain/delegatedAccount/${email}/responder`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Responder of account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/responder#POST)
     */
    /*
    CreateNewResponderInServer(content: string, copy: boolean, email: string, copyTo?: string, from?: string, to?: string): Promise<EmaildomainTaskSpecialAccount> {
      let url = `/email/domain/delegatedAccount/${email}/responder`
  
      return this.client.request<EmaildomainTaskSpecialAccount>('POST', url, {content, copy, copyTo, from, to})
    }
    */
    /**
     * Responder of account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/responder#DELETE)
     */
    /*
    DeleteAnExistingResponderInServer(email: string): Promise<EmaildomainTaskSpecialAccount> {
      let url = `/email/domain/delegatedAccount/${email}/responder`
  
      return this.client.request<EmaildomainTaskSpecialAccount>('DELETE', url)
    }
    */
    /**
     * updateUsage operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/updateUsage#POST)
     */
    /*
    UpdateUsageOfAccount(email: string): Promise<void> {
      let url = `/email/domain/delegatedAccount/${email}/updateUsage`
  
      return this.client.request<void>('POST', url)
    }
    */
    /**
     * usage operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/delegatedAccount/%7Bemail%7D/usage#POST)
     */
    /*
    UsageOfAccount(email: string): Promise<DomainDomainUsageAccountStruct> {
      let url = `/email/domain/delegatedAccount/${email}/usage`
  
      return this.client.request<DomainDomainUsageAccountStruct>('POST', url)
    }
    */
    /**
     * Get limits of mailing list [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/domain/mailingListLimits#GET)
     */
    GetLimitsOfMailingList(moderatorMessage) {
        let url = `/email/domain/mailingListLimits?`;
        const queryParams = new query_params_1.default();
        if (moderatorMessage) {
            queryParams.set('moderatorMessage', moderatorMessage.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.EmailDomain = EmailDomain;
//# sourceMappingURL=email.domain.js.map