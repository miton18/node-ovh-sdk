"use strict";
// GENERATED SDK for email/pro API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Disclaimer attributes list
 */
var EmailproDisclaimerAttribute;
(function (EmailproDisclaimerAttribute) {
    EmailproDisclaimerAttribute["CITY"] = "City";
    EmailproDisclaimerAttribute["COMPANY"] = "Company";
    EmailproDisclaimerAttribute["COUNTRY"] = "Country";
    EmailproDisclaimerAttribute["DEPARTMENT"] = "Department";
    EmailproDisclaimerAttribute["DISPLAYNAME"] = "DisplayName";
    EmailproDisclaimerAttribute["EMAIL"] = "Email";
    EmailproDisclaimerAttribute["FAXNUMBER"] = "FaxNumber";
    EmailproDisclaimerAttribute["FIRSTNAME"] = "FirstName";
    EmailproDisclaimerAttribute["HOMEPHONENUMBER"] = "HomePhoneNumber";
    EmailproDisclaimerAttribute["INITIALS"] = "Initials";
    EmailproDisclaimerAttribute["LASTNAME"] = "LastName";
    EmailproDisclaimerAttribute["MANAGER"] = "Manager";
    EmailproDisclaimerAttribute["MOBILENUMBER"] = "MobileNumber";
    EmailproDisclaimerAttribute["NOTES"] = "Notes";
    EmailproDisclaimerAttribute["OFFICE"] = "Office";
    EmailproDisclaimerAttribute["OTHERFAXNUMBER"] = "OtherFaxNumber";
    EmailproDisclaimerAttribute["OTHERHOMEPHONENUMBER"] = "OtherHomePhoneNumber";
    EmailproDisclaimerAttribute["OTHERPHONENUMBER"] = "OtherPhoneNumber";
    EmailproDisclaimerAttribute["PAGERNUMBER"] = "PagerNumber";
    EmailproDisclaimerAttribute["PHONENUMBER"] = "PhoneNumber";
    EmailproDisclaimerAttribute["STATE"] = "State";
    EmailproDisclaimerAttribute["STREET"] = "Street";
    EmailproDisclaimerAttribute["TITLE"] = "Title";
    EmailproDisclaimerAttribute["USERLOGONNAME"] = "UserLogonName";
    EmailproDisclaimerAttribute["ZIPCODE"] = "ZipCode";
})(EmailproDisclaimerAttribute = exports.EmailproDisclaimerAttribute || (exports.EmailproDisclaimerAttribute = {}));
/*
 * Domain type
 */
var EmailproDomainType;
(function (EmailproDomainType) {
    EmailproDomainType["AUTHORITATIVE"] = "authoritative";
    EmailproDomainType["NONAUTHORITATIVE"] = "nonAuthoritative";
})(EmailproDomainType = exports.EmailproDomainType || (exports.EmailproDomainType = {}));
/*
 * Mailing filter options availlable
 */
var EmailproMailingFilter;
(function (EmailproMailingFilter) {
    EmailproMailingFilter["VADERETRO"] = "vaderetro";
})(EmailproMailingFilter = exports.EmailproMailingFilter || (exports.EmailproMailingFilter = {}));
/*
 * Current object state
 */
var EmailproObjectState;
(function (EmailproObjectState) {
    EmailproObjectState["CREATING"] = "creating";
    EmailproObjectState["DELETING"] = "deleting";
    EmailproObjectState["OK"] = "ok";
    EmailproObjectState["REOPENING"] = "reopening";
    EmailproObjectState["SUSPENDED"] = "suspended";
    EmailproObjectState["SUSPENDING"] = "suspending";
    EmailproObjectState["UNKNOWN"] = "unknown";
})(EmailproObjectState = exports.EmailproObjectState || (exports.EmailproObjectState = {}));
/*
 * Renew period
 */
var EmailprorenewPeriod;
(function (EmailprorenewPeriod) {
    EmailprorenewPeriod["MONTHLY"] = "monthly";
    EmailprorenewPeriod["YEARLY"] = "yearly";
})(EmailprorenewPeriod = exports.EmailprorenewPeriod || (exports.EmailprorenewPeriod = {}));
/*
 * Server State
 */
var EmailproServerState;
(function (EmailproServerState) {
    EmailproServerState["CONFIGURATIONPENDING"] = "configurationPending";
    EmailproServerState["NOTCONFIGURED"] = "notConfigured";
    EmailproServerState["OK"] = "ok";
})(EmailproServerState = exports.EmailproServerState || (exports.EmailproServerState = {}));
/*
 * Service Offer name
 */
var EmailproServiceOffer;
(function (EmailproServiceOffer) {
    EmailproServiceOffer["EMAILPRO"] = "emailpro";
})(EmailproServiceOffer = exports.EmailproServiceOffer || (exports.EmailproServiceOffer = {}));
/*
 * Service State
 */
var EmailproServiceState;
(function (EmailproServiceState) {
    EmailproServiceState["CREATING"] = "creating";
    EmailproServiceState["DELETING"] = "deleting";
    EmailproServiceState["INMAINTENANCE"] = "inMaintenance";
    EmailproServiceState["OK"] = "ok";
    EmailproServiceState["REOPENING"] = "reopening";
    EmailproServiceState["SUSPENDED"] = "suspended";
    EmailproServiceState["SUSPENDING"] = "suspending";
})(EmailproServiceState = exports.EmailproServiceState || (exports.EmailproServiceState = {}));
/*
 * function enumeration for task
 */
var EmailproTaskFunction;
(function (EmailproTaskFunction) {
    EmailproTaskFunction["ADDACCOUNT"] = "addAccount";
    EmailproTaskFunction["ADDALIAS"] = "addAlias";
    EmailproTaskFunction["ADDDOMAIN"] = "addDomain";
    EmailproTaskFunction["ADDDOMAINDISCLAIMER"] = "addDomainDisclaimer";
    EmailproTaskFunction["ADDEXTERNALCONTACT"] = "addExternalContact";
    EmailproTaskFunction["ADDFULLACCESS"] = "addFullAccess";
    EmailproTaskFunction["ADDSENDAS"] = "addSendAs";
    EmailproTaskFunction["ADDSENDONBEHALFTO"] = "addSendOnBehalfTo";
    EmailproTaskFunction["ADDSERVICEAUTHORIZEDIP"] = "addServiceAuthorizedIp";
    EmailproTaskFunction["CHANGEHOSTNAME"] = "changeHostname";
    EmailproTaskFunction["CHANGEPASSWORD"] = "changePassword";
    EmailproTaskFunction["CONFIGURECUSTOMER"] = "configureCustomer";
    EmailproTaskFunction["DELETEACCOUNT"] = "deleteAccount";
    EmailproTaskFunction["DELETEALIAS"] = "deleteAlias";
    EmailproTaskFunction["DELETEDOMAIN"] = "deleteDomain";
    EmailproTaskFunction["DELETEDOMAINDISCLAIMER"] = "deleteDomainDisclaimer";
    EmailproTaskFunction["DELETEEXTERNALCONTACT"] = "deleteExternalContact";
    EmailproTaskFunction["DELETEFULLACCESS"] = "deleteFullAccess";
    EmailproTaskFunction["DELETESENDAS"] = "deleteSendAs";
    EmailproTaskFunction["DELETESENDONBEHALFTO"] = "deleteSendOnBehalfTo";
    EmailproTaskFunction["DELETESERVICE"] = "deleteService";
    EmailproTaskFunction["DELETESERVICEAUTHORIZEDIP"] = "deleteServiceAuthorizedIp";
    EmailproTaskFunction["DIAGNOSEACCOUNT"] = "diagnoseAccount";
    EmailproTaskFunction["EXPANDDRIVE"] = "expandDrive";
    EmailproTaskFunction["INSTALLSERVER"] = "installServer";
    EmailproTaskFunction["MAINTENANCE"] = "maintenance";
    EmailproTaskFunction["MIGRATEACCOUNTVIAOMM"] = "migrateAccountViaOMM";
    EmailproTaskFunction["MIGRATIONACCOUNT"] = "migrationAccount";
    EmailproTaskFunction["MIGRATIONDISCLAIMER"] = "migrationDisclaimer";
    EmailproTaskFunction["MIGRATIONEXTERNALCONTACT"] = "migrationExternalContact";
    EmailproTaskFunction["MIGRATIONHISTORY"] = "migrationHistory";
    EmailproTaskFunction["MIGRATIONSERVICE"] = "migrationService";
    EmailproTaskFunction["REOPENACCOUNT"] = "reOpenAccount";
    EmailproTaskFunction["SETACCOUNT"] = "setAccount";
    EmailproTaskFunction["SETALIAS"] = "setAlias";
    EmailproTaskFunction["SETDNS"] = "setDns";
    EmailproTaskFunction["SETDOMAIN"] = "setDomain";
    EmailproTaskFunction["SETDOMAINDISCLAIMER"] = "setDomainDisclaimer";
    EmailproTaskFunction["SETEXTERNALCONTACT"] = "setExternalContact";
    EmailproTaskFunction["SETSERVICE"] = "setService";
    EmailproTaskFunction["SUSPENDACCOUNT"] = "suspendAccount";
    EmailproTaskFunction["SUSPENDSERVICE"] = "suspendService";
    EmailproTaskFunction["UNKNOWN"] = "unknown";
    EmailproTaskFunction["UNSUSPENDACCOUNT"] = "unsuspendAccount";
    EmailproTaskFunction["UNSUSPENDSERVICE"] = "unsuspendService";
})(EmailproTaskFunction = exports.EmailproTaskFunction || (exports.EmailproTaskFunction = {}));
/*
 * Task status
 */
var EmailproTaskStatus;
(function (EmailproTaskStatus) {
    EmailproTaskStatus["CANCELLED"] = "cancelled";
    EmailproTaskStatus["DOING"] = "doing";
    EmailproTaskStatus["DONE"] = "done";
    EmailproTaskStatus["ERROR"] = "error";
    EmailproTaskStatus["TODO"] = "todo";
})(EmailproTaskStatus = exports.EmailproTaskStatus || (exports.EmailproTaskStatus = {}));
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
class EmailPro {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the PROEMAIL service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro#GET)
     */
    ListAvailableServices() {
        let url = `/email/pro`;
        return this.client.request('GET', url);
    }
    /**
     * Email pro service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D#GET)
     */
    GetThisObjectProperties(service) {
        let url = `/email/pro/${service}`;
        return this.client.request('GET', url);
    }
    /**
     * Email pro service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D#PUT)
     */
    AlterThisObjectProperties(service, payload) {
        let url = `/email/pro/${service}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the email.pro.Account objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account#GET)
     */
    AccountsAssociatedToThisProService(service, id, primaryEmailAddress) {
        let url = `/email/pro/${service}/account?`;
        const queryParams = new query_params_1.default();
        if (id) {
            queryParams.set('id', id.toString());
        }
        if (primaryEmailAddress) {
            queryParams.set('primaryEmailAddress', primaryEmailAddress);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Mailbox [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D#GET)
     */
    /*
    GetThisObjectProperties(email: string, service: string): Promise<EmailproAccount> {
      let url = `/email/pro/${service}/account/${email}`
  
      return this.client.request<EmailproAccount>('GET', url)
    }
    */
    /**
     * Mailbox [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D#PUT)
     */
    /*
    AlterThisObjectProperties(email: string, service: string, payload: EmailproAccount): Promise<void> {
      let url = `/email/pro/${service}/account/${email}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Mailbox [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D#DELETE)
     */
    DeleteExistingMailboxInProServer(email, service) {
        let url = `/email/pro/${service}/account/${email}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.pro.AccountAlias objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/alias#GET)
     */
    AliasesAssociatedToThisMailbox(email, service) {
        let url = `/email/pro/${service}/account/${email}/alias`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.pro.AccountAlias objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/alias#POST)
     */
    CreateNewAlias(alias, email, service) {
        let url = `/email/pro/${service}/account/${email}/alias`;
        return this.client.request('POST', url, { alias });
    }
    /**
     * Aliases on this mailbox [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/alias/%7Balias%7D#GET)
     */
    /*
    GetThisObjectProperties(alias: string, email: string, service: string): Promise<EmailproAccountAlias> {
      let url = `/email/pro/${service}/account/${email}/alias/${alias}`
  
      return this.client.request<EmailproAccountAlias>('GET', url)
    }
    */
    /**
     * Aliases on this mailbox [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/alias/%7Balias%7D#DELETE)
     */
    DeleteExistingAlias(alias, email, service) {
        let url = `/email/pro/${service}/account/${email}/alias/${alias}`;
        return this.client.request('DELETE', url);
    }
    /**
     * changePassword operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/changePassword#POST)
     */
    ChangeMailboxPassword(email, password, service) {
        let url = `/email/pro/${service}/account/${email}/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * Account Diagnosis [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/diagnostics#GET)
     */
    /*
    GetThisObjectProperties(email: string, service: string): Promise<EmailproAccountDiagnosis> {
      let url = `/email/pro/${service}/account/${email}/diagnostics`
  
      return this.client.request<EmailproAccountDiagnosis>('GET', url)
    }
    */
    /**
     * Account Diagnosis [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/diagnostics#POST)
     */
    CreateNewDiagnosisRequest(email, password, service) {
        let url = `/email/pro/${service}/account/${email}/diagnostics`;
        return this.client.request('POST', url, { password });
    }
    /**
     * List the email.pro.AccountFullAccess objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/fullAccess#GET)
     */
    FullAccessGrantedUsersForThisMailbox(email, service) {
        let url = `/email/pro/${service}/account/${email}/fullAccess`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.pro.AccountFullAccess objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/fullAccess#POST)
     */
    AllowFullAccessToAUser(allowedAccountId, email, service) {
        let url = `/email/pro/${service}/account/${email}/fullAccess`;
        return this.client.request('POST', url, { allowedAccountId });
    }
    /**
     * Users having full access on this mailbox [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/fullAccess/%7BallowedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(allowedAccountId: number, email: string, service: string): Promise<EmailproAccountFullAccess> {
      let url = `/email/pro/${service}/account/${email}/fullAccess/${allowedAccountId}`
  
      return this.client.request<EmailproAccountFullAccess>('GET', url)
    }
    */
    /**
     * Users having full access on this mailbox [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/fullAccess/%7BallowedAccountId%7D#DELETE)
     */
    RevokeFullAccess(allowedAccountId, email, service) {
        let url = `/email/pro/${service}/account/${email}/fullAccess/${allowedAccountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.pro.AccountSendAs objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendAs#GET)
     */
    SendAsGrantedUsersForThisMailbox(email, service) {
        let url = `/email/pro/${service}/account/${email}/sendAs`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.pro.AccountSendAs objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendAs#POST)
     */
    AllowAnotherUserToSendMailsFromThisMailbox(allowAccountId, email, service) {
        let url = `/email/pro/${service}/account/${email}/sendAs`;
        return this.client.request('POST', url, { allowAccountId });
    }
    /**
     * Users authorized to send mails from this mailbox [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendAs/%7BallowedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(allowedAccountId: number, email: string, service: string): Promise<EmailproAccountSendAs> {
      let url = `/email/pro/${service}/account/${email}/sendAs/${allowedAccountId}`
  
      return this.client.request<EmailproAccountSendAs>('GET', url)
    }
    */
    /**
     * Users authorized to send mails from this mailbox [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendAs/%7BallowedAccountId%7D#DELETE)
     */
    DeleteAllowedUserForSendAs(allowedAccountId, email, service) {
        let url = `/email/pro/${service}/account/${email}/sendAs/${allowedAccountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.pro.AccountSendOnBehalfTo objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendOnBehalfTo#GET)
     */
    SendOnBehalfToGrantedUsersForThisMailbox(email, service) {
        let url = `/email/pro/${service}/account/${email}/sendOnBehalfTo`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.pro.AccountSendOnBehalfTo objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendOnBehalfTo#POST)
     */
    AllowAnotherUserToSendOnBehalfToMailsFromThisMailbox(allowAccountId, email, service) {
        let url = `/email/pro/${service}/account/${email}/sendOnBehalfTo`;
        return this.client.request('POST', url, { allowAccountId });
    }
    /**
     * Get users authorized to Send On Behalf To mails from this mailbox [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendOnBehalfTo/%7BallowedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(allowedAccountId: number, email: string, service: string): Promise<EmailproAccountSendOnBehalfTo> {
      let url = `/email/pro/${service}/account/${email}/sendOnBehalfTo/${allowedAccountId}`
  
      return this.client.request<EmailproAccountSendOnBehalfTo>('GET', url)
    }
    */
    /**
     * Get users authorized to Send On Behalf To mails from this mailbox [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/sendOnBehalfTo/%7BallowedAccountId%7D#DELETE)
     */
    DeleteAllowedUserForSendOnBehalfTo(allowedAccountId, email, service) {
        let url = `/email/pro/${service}/account/${email}/sendOnBehalfTo/${allowedAccountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.pro.Task objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/tasks#GET)
     */
    PendingTaskForThisMailbox(email, service) {
        let url = `/email/pro/${service}/account/${email}/tasks`;
        return this.client.request('GET', url);
    }
    /**
     * Organization task details [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/tasks/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(email: string, id: number, service: string): Promise<EmailproTask> {
      let url = `/email/pro/${service}/account/${email}/tasks/${id}`
  
      return this.client.request<EmailproTask>('GET', url)
    }
    */
    /**
     * terminate operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/account/%7Bemail%7D/terminate#POST)
     */
    TerminateAccountAtExpirationDate(email, service) {
        let url = `/email/pro/${service}/account/${email}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * billingMigrated operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/billingMigrated#GET)
     */
    DetectsBillingTransitionStatusForTheService(service) {
        let url = `/email/pro/${service}/billingMigrated`;
        return this.client.request('GET', url);
    }
    /**
     * billingPlan operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/billingPlan#GET)
     */
    EmailproBillingPlan(service) {
        let url = `/email/pro/${service}/billingPlan`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.pro.Domain objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain#GET)
     */
    DomainsAssociatedToThisService(service, state) {
        let url = `/email/pro/${service}/domain?`;
        const queryParams = new query_params_1.default();
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.pro.Domain objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain#POST)
     */
    CreateNewDomainInProServices(name, service, type, configureAutodiscover, configureMx, mxRelay) {
        let url = `/email/pro/${service}/domain`;
        return this.client.request('POST', url, { name, type, configureAutodiscover, configureMx, mxRelay });
    }
    /**
     * Domain [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D#GET)
     */
    /*
    GetThisObjectProperties(domainName: string, service: string): Promise<EmailproDomain> {
      let url = `/email/pro/${service}/domain/${domainName}`
  
      return this.client.request<EmailproDomain>('GET', url)
    }
    */
    /**
     * Domain [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D#PUT)
     */
    /*
    AlterThisObjectProperties(domainName: string, service: string, payload: EmailproDomain): Promise<void> {
      let url = `/email/pro/${service}/domain/${domainName}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Domain [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D#DELETE)
     */
    DeleteExistingDomainInProServices(domainName, service) {
        let url = `/email/pro/${service}/domain/${domainName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * disclaimer [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D/disclaimer#GET)
     */
    /*
    GetThisObjectProperties(domainName: string, service: string): Promise<Emailprodisclaimer> {
      let url = `/email/pro/${service}/domain/${domainName}/disclaimer`
  
      return this.client.request<Emailprodisclaimer>('GET', url)
    }
    */
    /**
     * disclaimer [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D/disclaimer#PUT)
     */
    /*
    AlterThisObjectProperties(domainName: string, service: string, payload: Emailprodisclaimer): Promise<void> {
      let url = `/email/pro/${service}/domain/${domainName}/disclaimer`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * disclaimer [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D/disclaimer#POST)
     */
    CreateOrganizationDisclaimerOfEachEmail(content, domainName, service, outsideOnly) {
        let url = `/email/pro/${service}/domain/${domainName}/disclaimer`;
        return this.client.request('POST', url, { content, outsideOnly });
    }
    /**
     * disclaimer [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D/disclaimer#DELETE)
     */
    DeleteExistingOrganizationDisclaimer(domainName, service) {
        let url = `/email/pro/${service}/domain/${domainName}/disclaimer`;
        return this.client.request('DELETE', url);
    }
    /**
     * disclaimerAttribute operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/domain/%7BdomainName%7D/disclaimerAttribute#GET)
     */
    GetDiclaimerAttributesToSubstituteWithActiveDirectoryProperties(domainName, service) {
        let url = `/email/pro/${service}/domain/${domainName}/disclaimerAttribute`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.pro.ExternalContact objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/externalContact#GET)
     */
    ExternalContactsForThisService(service, displayName, externalEmailAddress, firstName, id, lastName) {
        let url = `/email/pro/${service}/externalContact?`;
        const queryParams = new query_params_1.default();
        if (displayName) {
            queryParams.set('displayName', displayName);
        }
        if (externalEmailAddress) {
            queryParams.set('externalEmailAddress', externalEmailAddress);
        }
        if (firstName) {
            queryParams.set('firstName', firstName);
        }
        if (id) {
            queryParams.set('id', id.toString());
        }
        if (lastName) {
            queryParams.set('lastName', lastName);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.pro.ExternalContact objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/externalContact#POST)
     */
    CreateNewExternalContact(externalEmailAddress, service, displayName, firstName, hiddenFromGAL, initials, lastName) {
        let url = `/email/pro/${service}/externalContact`;
        return this.client.request('POST', url, { externalEmailAddress, displayName, firstName, hiddenFromGAL, initials, lastName });
    }
    /**
     * External contact for this pro service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/externalContact/%7BexternalEmailAddress%7D#GET)
     */
    /*
    GetThisObjectProperties(externalEmailAddress: string, service: string): Promise<EmailproExternalContact> {
      let url = `/email/pro/${service}/externalContact/${externalEmailAddress}`
  
      return this.client.request<EmailproExternalContact>('GET', url)
    }
    */
    /**
     * External contact for this pro service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/externalContact/%7BexternalEmailAddress%7D#PUT)
     */
    /*
    AlterThisObjectProperties(externalEmailAddress: string, service: string, payload: EmailproExternalContact): Promise<void> {
      let url = `/email/pro/${service}/externalContact/${externalEmailAddress}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * External contact for this pro service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/externalContact/%7BexternalEmailAddress%7D#DELETE)
     */
    DeleteExternalContact(externalEmailAddress, service) {
        let url = `/email/pro/${service}/externalContact/${externalEmailAddress}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Server [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/server#GET)
     */
    /*
    GetThisObjectProperties(service: string): Promise<EmailproServer> {
      let url = `/email/pro/${service}/server`
  
      return this.client.request<EmailproServer>('GET', url)
    }
    */
    /**
     * Details about a Service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(service: string): Promise<ServicesService> {
      let url = `/email/pro/${service}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(service: string, payload: ServicesService): Promise<void> {
      let url = `/email/pro/${service}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the email.pro.Task objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/task#GET)
     */
    PendingActions(service) {
        let url = `/email/pro/${service}/task`;
        return this.client.request('GET', url);
    }
    /**
     * Organization task details [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/task/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, service: string): Promise<EmailproTask> {
      let url = `/email/pro/${service}/task/${id}`
  
      return this.client.request<EmailproTask>('GET', url)
    }
    */
    /**
     * updateFlagsOnAllAccounts operations [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/pro/%7Bservice%7D/updateFlagsOnAllAccounts#POST)
     */
    UpdateSpamAndVirusFlagsOnAllActiveAccounts(service) {
        let url = `/email/pro/${service}/updateFlagsOnAllAccounts`;
        return this.client.request('POST', url);
    }
}
exports.EmailPro = EmailPro;
//# sourceMappingURL=email.pro.js.map