"use strict";
// GENERATED SDK for email/exchange API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Subscription state
 */
var EmailexchangeactiveSyncNotificationState;
(function (EmailexchangeactiveSyncNotificationState) {
    EmailexchangeactiveSyncNotificationState["CREATING"] = "creating";
    EmailexchangeactiveSyncNotificationState["DELETING"] = "deleting";
    EmailexchangeactiveSyncNotificationState["OK"] = "ok";
})(EmailexchangeactiveSyncNotificationState = exports.EmailexchangeactiveSyncNotificationState || (exports.EmailexchangeactiveSyncNotificationState = {}));
/*
 * Activesync action
 */
var EmailexchangeActiveSyncPolicy;
(function (EmailexchangeActiveSyncPolicy) {
    EmailexchangeActiveSyncPolicy["ALLOW"] = "allow";
    EmailexchangeActiveSyncPolicy["BLOCK"] = "block";
    EmailexchangeActiveSyncPolicy["QUARANTINE"] = "quarantine";
})(EmailexchangeActiveSyncPolicy = exports.EmailexchangeActiveSyncPolicy || (exports.EmailexchangeActiveSyncPolicy = {}));
/*
 * Authorized IP State
 */
var EmailexchangeauthorizedIpStatus;
(function (EmailexchangeauthorizedIpStatus) {
    EmailexchangeauthorizedIpStatus["CREATING"] = "creating";
    EmailexchangeauthorizedIpStatus["DELETING"] = "deleting";
    EmailexchangeauthorizedIpStatus["OK"] = "ok";
})(EmailexchangeauthorizedIpStatus = exports.EmailexchangeauthorizedIpStatus || (exports.EmailexchangeauthorizedIpStatus = {}));
/*
 * Device ActiveSync state
 */
var EmailexchangeDeviceActiveSyncState;
(function (EmailexchangeDeviceActiveSyncState) {
    EmailexchangeDeviceActiveSyncState["ALLOWED"] = "allowed";
    EmailexchangeDeviceActiveSyncState["BLOCKED"] = "blocked";
    EmailexchangeDeviceActiveSyncState["DEVICEDISCOVERY"] = "deviceDiscovery";
    EmailexchangeDeviceActiveSyncState["QUARANTINED"] = "quarantined";
})(EmailexchangeDeviceActiveSyncState = exports.EmailexchangeDeviceActiveSyncState || (exports.EmailexchangeDeviceActiveSyncState = {}));
/*
 * Disclaimer attributes list
 */
var EmailexchangeDisclaimerAttribute;
(function (EmailexchangeDisclaimerAttribute) {
    EmailexchangeDisclaimerAttribute["CITY"] = "City";
    EmailexchangeDisclaimerAttribute["COMPANY"] = "Company";
    EmailexchangeDisclaimerAttribute["COUNTRY"] = "Country";
    EmailexchangeDisclaimerAttribute["DEPARTMENT"] = "Department";
    EmailexchangeDisclaimerAttribute["DISPLAYNAME"] = "DisplayName";
    EmailexchangeDisclaimerAttribute["EMAIL"] = "Email";
    EmailexchangeDisclaimerAttribute["FAXNUMBER"] = "FaxNumber";
    EmailexchangeDisclaimerAttribute["FIRSTNAME"] = "FirstName";
    EmailexchangeDisclaimerAttribute["HOMEPHONENUMBER"] = "HomePhoneNumber";
    EmailexchangeDisclaimerAttribute["INITIALS"] = "Initials";
    EmailexchangeDisclaimerAttribute["LASTNAME"] = "LastName";
    EmailexchangeDisclaimerAttribute["MANAGER"] = "Manager";
    EmailexchangeDisclaimerAttribute["MOBILENUMBER"] = "MobileNumber";
    EmailexchangeDisclaimerAttribute["NOTES"] = "Notes";
    EmailexchangeDisclaimerAttribute["OFFICE"] = "Office";
    EmailexchangeDisclaimerAttribute["OTHERFAXNUMBER"] = "OtherFaxNumber";
    EmailexchangeDisclaimerAttribute["OTHERHOMEPHONENUMBER"] = "OtherHomePhoneNumber";
    EmailexchangeDisclaimerAttribute["OTHERPHONENUMBER"] = "OtherPhoneNumber";
    EmailexchangeDisclaimerAttribute["PAGERNUMBER"] = "PagerNumber";
    EmailexchangeDisclaimerAttribute["PHONENUMBER"] = "PhoneNumber";
    EmailexchangeDisclaimerAttribute["STATE"] = "State";
    EmailexchangeDisclaimerAttribute["STREET"] = "Street";
    EmailexchangeDisclaimerAttribute["TITLE"] = "Title";
    EmailexchangeDisclaimerAttribute["USERLOGONNAME"] = "UserLogonName";
    EmailexchangeDisclaimerAttribute["ZIPCODE"] = "ZipCode";
})(EmailexchangeDisclaimerAttribute = exports.EmailexchangeDisclaimerAttribute || (exports.EmailexchangeDisclaimerAttribute = {}));
/*
 * Domain type
 */
var EmailexchangeDomainType;
(function (EmailexchangeDomainType) {
    EmailexchangeDomainType["AUTHORITATIVE"] = "authoritative";
    EmailexchangeDomainType["NONAUTHORITATIVE"] = "nonAuthoritative";
})(EmailexchangeDomainType = exports.EmailexchangeDomainType || (exports.EmailexchangeDomainType = {}));
/*
 * Outlook language
 */
var EmailexchangeLanguage;
(function (EmailexchangeLanguage) {
    EmailexchangeLanguage["AR"] = "ar";
    EmailexchangeLanguage["BG"] = "bg";
    EmailexchangeLanguage["CZ"] = "cz";
    EmailexchangeLanguage["DA"] = "da";
    EmailexchangeLanguage["DE"] = "de";
    EmailexchangeLanguage["EL"] = "el";
    EmailexchangeLanguage["EN"] = "en";
    EmailexchangeLanguage["ES"] = "es";
    EmailexchangeLanguage["ET"] = "et";
    EmailexchangeLanguage["FI"] = "fi";
    EmailexchangeLanguage["FR"] = "fr";
    EmailexchangeLanguage["HE"] = "he";
    EmailexchangeLanguage["HI"] = "hi";
    EmailexchangeLanguage["HR"] = "hr";
    EmailexchangeLanguage["HU"] = "hu";
    EmailexchangeLanguage["ID"] = "id";
    EmailexchangeLanguage["IN"] = "in";
    EmailexchangeLanguage["IT"] = "it";
    EmailexchangeLanguage["JA"] = "ja";
    EmailexchangeLanguage["KO"] = "ko";
    EmailexchangeLanguage["KZ"] = "kz";
    EmailexchangeLanguage["LT"] = "lt";
    EmailexchangeLanguage["LV"] = "lv";
    EmailexchangeLanguage["MS"] = "ms";
    EmailexchangeLanguage["NB"] = "nb";
    EmailexchangeLanguage["NL"] = "nl";
    EmailexchangeLanguage["PL"] = "pl";
    EmailexchangeLanguage["PT"] = "pt";
    EmailexchangeLanguage["PT_BR"] = "pt-BR";
    EmailexchangeLanguage["RO"] = "ro";
    EmailexchangeLanguage["RS"] = "rs";
    EmailexchangeLanguage["RU"] = "ru";
    EmailexchangeLanguage["SK"] = "sk";
    EmailexchangeLanguage["SL"] = "sl";
    EmailexchangeLanguage["SV"] = "sv";
    EmailexchangeLanguage["TH"] = "th";
    EmailexchangeLanguage["TR"] = "tr";
    EmailexchangeLanguage["UK"] = "uk";
    EmailexchangeLanguage["VI"] = "vi";
    EmailexchangeLanguage["ZH_CN"] = "zh-CN";
})(EmailexchangeLanguage = exports.EmailexchangeLanguage || (exports.EmailexchangeLanguage = {}));
/*
 * Mailing filter options availlable
 */
var EmailexchangeMailingFilter;
(function (EmailexchangeMailingFilter) {
    EmailexchangeMailingFilter["VADERETRO"] = "vaderetro";
})(EmailexchangeMailingFilter = exports.EmailexchangeMailingFilter || (exports.EmailexchangeMailingFilter = {}));
/*
 * Depart distribution group restriction status
 */
var EmailexchangeMailingListDepartRestriction;
(function (EmailexchangeMailingListDepartRestriction) {
    EmailexchangeMailingListDepartRestriction["CLOSED"] = "closed";
    EmailexchangeMailingListDepartRestriction["OPEN"] = "open";
})(EmailexchangeMailingListDepartRestriction = exports.EmailexchangeMailingListDepartRestriction || (exports.EmailexchangeMailingListDepartRestriction = {}));
/*
 * Join distribution group restriction status
 */
var EmailexchangeMailingListJoinRestriction;
(function (EmailexchangeMailingListJoinRestriction) {
    EmailexchangeMailingListJoinRestriction["APPROVALREQUIRED"] = "approvalRequired";
    EmailexchangeMailingListJoinRestriction["CLOSED"] = "closed";
    EmailexchangeMailingListJoinRestriction["OPEN"] = "open";
})(EmailexchangeMailingListJoinRestriction = exports.EmailexchangeMailingListJoinRestriction || (exports.EmailexchangeMailingListJoinRestriction = {}));
/*
 * Current object state
 */
var EmailexchangeObjectState;
(function (EmailexchangeObjectState) {
    EmailexchangeObjectState["CREATING"] = "creating";
    EmailexchangeObjectState["DELETING"] = "deleting";
    EmailexchangeObjectState["INTERNALMIGRATION"] = "internalMigration";
    EmailexchangeObjectState["OK"] = "ok";
    EmailexchangeObjectState["REOPENING"] = "reopening";
    EmailexchangeObjectState["SUSPENDED"] = "suspended";
    EmailexchangeObjectState["SUSPENDING"] = "suspending";
})(EmailexchangeObjectState = exports.EmailexchangeObjectState || (exports.EmailexchangeObjectState = {}));
/*
 * Outlook version
 */
var EmailexchangeOutlookVersion;
(function (EmailexchangeOutlookVersion) {
    EmailexchangeOutlookVersion["MAC_X86_2011"] = "mac_x86_2011";
    EmailexchangeOutlookVersion["MAC_X86_2016"] = "mac_x86_2016";
    EmailexchangeOutlookVersion["WINDOWS_X64_2013"] = "windows_x64_2013";
    EmailexchangeOutlookVersion["WINDOWS_X64_2016"] = "windows_x64_2016";
    EmailexchangeOutlookVersion["WINDOWS_X86_2013"] = "windows_x86_2013";
    EmailexchangeOutlookVersion["WINDOWS_X86_2016"] = "windows_x86_2016";
})(EmailexchangeOutlookVersion = exports.EmailexchangeOutlookVersion || (exports.EmailexchangeOutlookVersion = {}));
/*
 * OVH licence account
 */
var EmailexchangeOvhLicence;
(function (EmailexchangeOvhLicence) {
    EmailexchangeOvhLicence["BASIC"] = "basic";
    EmailexchangeOvhLicence["ENTERPRISE"] = "enterprise";
    EmailexchangeOvhLicence["STANDARD"] = "standard";
})(EmailexchangeOvhLicence = exports.EmailexchangeOvhLicence || (exports.EmailexchangeOvhLicence = {}));
/*
 * Public folder right type
 */
var EmailexchangePublicFolderRightType;
(function (EmailexchangePublicFolderRightType) {
    EmailexchangePublicFolderRightType["EDITOR"] = "editor";
    EmailexchangePublicFolderRightType["NONE"] = "none";
    EmailexchangePublicFolderRightType["REVIEWER"] = "reviewer";
})(EmailexchangePublicFolderRightType = exports.EmailexchangePublicFolderRightType || (exports.EmailexchangePublicFolderRightType = {}));
/*
 * Public folder type
 */
var EmailexchangePublicFolderType;
(function (EmailexchangePublicFolderType) {
    EmailexchangePublicFolderType["CALENDAR"] = "calendar";
    EmailexchangePublicFolderType["CONTACTS"] = "contacts";
    EmailexchangePublicFolderType["PLAIN"] = "plain";
    EmailexchangePublicFolderType["TASKS"] = "tasks";
})(EmailexchangePublicFolderType = exports.EmailexchangePublicFolderType || (exports.EmailexchangePublicFolderType = {}));
/*
 * Renew period
 */
var EmailexchangerenewPeriod;
(function (EmailexchangerenewPeriod) {
    EmailexchangerenewPeriod["MONTHLY"] = "monthly";
    EmailexchangerenewPeriod["YEARLY"] = "yearly";
})(EmailexchangerenewPeriod = exports.EmailexchangerenewPeriod || (exports.EmailexchangerenewPeriod = {}));
/*
 * Resource Type
 */
var EmailexchangeResourceType;
(function (EmailexchangeResourceType) {
    EmailexchangeResourceType["EQUIPMENT"] = "equipment";
    EmailexchangeResourceType["ROOM"] = "room";
})(EmailexchangeResourceType = exports.EmailexchangeResourceType || (exports.EmailexchangeResourceType = {}));
/*
 * Server State
 */
var EmailexchangeServerState;
(function (EmailexchangeServerState) {
    EmailexchangeServerState["CONFIGURATIONPENDING"] = "configurationPending";
    EmailexchangeServerState["NOTCONFIGURED"] = "notConfigured";
    EmailexchangeServerState["OK"] = "ok";
})(EmailexchangeServerState = exports.EmailexchangeServerState || (exports.EmailexchangeServerState = {}));
/*
 * Service Offer name
 */
var EmailexchangeServiceOffer;
(function (EmailexchangeServiceOffer) {
    EmailexchangeServiceOffer["DEDICATED"] = "dedicated";
    EmailexchangeServiceOffer["DEDICATEDCLUSTER"] = "dedicatedCluster";
    EmailexchangeServiceOffer["HOSTED"] = "hosted";
    EmailexchangeServiceOffer["PROVIDER"] = "provider";
})(EmailexchangeServiceOffer = exports.EmailexchangeServiceOffer || (exports.EmailexchangeServiceOffer = {}));
/*
 * Exchange Service State
 */
var EmailexchangeServiceState;
(function (EmailexchangeServiceState) {
    EmailexchangeServiceState["INMAINTENANCE"] = "inMaintenance";
    EmailexchangeServiceState["OK"] = "ok";
    EmailexchangeServiceState["SUSPENDED"] = "suspended";
})(EmailexchangeServiceState = exports.EmailexchangeServiceState || (exports.EmailexchangeServiceState = {}));
/*
 * Level of access to calendar of Resource Mailbox
 */
var EmailexchangeShowMeetingDetails;
(function (EmailexchangeShowMeetingDetails) {
    EmailexchangeShowMeetingDetails["AVAILABILITYONLY"] = "availabilityOnly";
    EmailexchangeShowMeetingDetails["LIMITEDDETAILS"] = "limitedDetails";
    EmailexchangeShowMeetingDetails["REVIEWER"] = "reviewer";
})(EmailexchangeShowMeetingDetails = exports.EmailexchangeShowMeetingDetails || (exports.EmailexchangeShowMeetingDetails = {}));
/*
 * function enumeration for exchange task
 */
var EmailexchangeTaskFunction;
(function (EmailexchangeTaskFunction) {
    EmailexchangeTaskFunction["ACTIVATESHAREPOINT"] = "activateSharepoint";
    EmailexchangeTaskFunction["ADDACCOUNT"] = "addAccount";
    EmailexchangeTaskFunction["ADDACCOUNTARCHIVE"] = "addAccountArchive";
    EmailexchangeTaskFunction["ADDACTIVESYNCMAILNOTIFICATION"] = "addActiveSyncMailNotification";
    EmailexchangeTaskFunction["ADDALIAS"] = "addAlias";
    EmailexchangeTaskFunction["ADDDISTRIBUTIONGROUP"] = "addDistributionGroup";
    EmailexchangeTaskFunction["ADDDISTRIBUTIONGROUPMANAGER"] = "addDistributionGroupManager";
    EmailexchangeTaskFunction["ADDDISTRIBUTIONGROUPMEMBER"] = "addDistributionGroupMember";
    EmailexchangeTaskFunction["ADDDISTRIBUTIONGROUPSENDAS"] = "addDistributionGroupSendAs";
    EmailexchangeTaskFunction["ADDDISTRIBUTIONGROUPSENDONBEHALFTO"] = "addDistributionGroupSendOnBehalfTo";
    EmailexchangeTaskFunction["ADDDOMAIN"] = "addDomain";
    EmailexchangeTaskFunction["ADDDOMAINDISCLAIMER"] = "addDomainDisclaimer";
    EmailexchangeTaskFunction["ADDEXCHANGESERVICEAUTHORIZEDIP"] = "addExchangeServiceAuthorizedIp";
    EmailexchangeTaskFunction["ADDEXPORTPSTREQUEST"] = "addExportPstRequest";
    EmailexchangeTaskFunction["ADDEXTERNALCONTACT"] = "addExternalContact";
    EmailexchangeTaskFunction["ADDFULLACCESS"] = "addFullAccess";
    EmailexchangeTaskFunction["ADDOUTLOOKLICENSE"] = "addOutlookLicense";
    EmailexchangeTaskFunction["ADDPUBLICFOLDER"] = "addPublicFolder";
    EmailexchangeTaskFunction["ADDPUBLICFOLDERPERMISSION"] = "addPublicFolderPermission";
    EmailexchangeTaskFunction["ADDRESOURCEACCOUNT"] = "addResourceAccount";
    EmailexchangeTaskFunction["ADDRESOURCEDELEGATE"] = "addResourceDelegate";
    EmailexchangeTaskFunction["ADDSENDAS"] = "addSendAs";
    EmailexchangeTaskFunction["ADDSENDONBEHALFTO"] = "addSendOnBehalfTo";
    EmailexchangeTaskFunction["ADDSHAREDACCOUNT"] = "addSharedAccount";
    EmailexchangeTaskFunction["ADDSHAREDACCOUNTFULLACCESS"] = "addSharedAccountFullAccess";
    EmailexchangeTaskFunction["ADDSHAREDACCOUNTSENDAS"] = "addSharedAccountSendAs";
    EmailexchangeTaskFunction["ADDSHAREDACCOUNTSENDONBEHALFTO"] = "addSharedAccountSendOnBehalfTo";
    EmailexchangeTaskFunction["CHANGEHOSTNAME"] = "changeHostname";
    EmailexchangeTaskFunction["CHANGEPASSWORD"] = "changePassword";
    EmailexchangeTaskFunction["CLEARDATAONDEVICE"] = "clearDataOnDevice";
    EmailexchangeTaskFunction["CLONETEMPLATEEXCHANGEPRIVATE"] = "cloneTemplateExchangePrivate";
    EmailexchangeTaskFunction["CONFIGUREEXCHANGECUSTOMER"] = "configureExchangeCustomer";
    EmailexchangeTaskFunction["DELETEACCOUNT"] = "deleteAccount";
    EmailexchangeTaskFunction["DELETEACCOUNTARCHIVE"] = "deleteAccountArchive";
    EmailexchangeTaskFunction["DELETEACTIVESYNCMAILNOTIFICATION"] = "deleteActiveSyncMailNotification";
    EmailexchangeTaskFunction["DELETEALIAS"] = "deleteAlias";
    EmailexchangeTaskFunction["DELETEDISTRIBUTIONGROUP"] = "deleteDistributionGroup";
    EmailexchangeTaskFunction["DELETEDISTRIBUTIONGROUPMANAGER"] = "deleteDistributionGroupManager";
    EmailexchangeTaskFunction["DELETEDISTRIBUTIONGROUPMEMBER"] = "deleteDistributionGroupMember";
    EmailexchangeTaskFunction["DELETEDISTRIBUTIONGROUPSENDAS"] = "deleteDistributionGroupSendAs";
    EmailexchangeTaskFunction["DELETEDISTRIBUTIONGROUPSENDONBEHALFTO"] = "deleteDistributionGroupSendOnBehalfTo";
    EmailexchangeTaskFunction["DELETEDOMAIN"] = "deleteDomain";
    EmailexchangeTaskFunction["DELETEDOMAINDISCLAIMER"] = "deleteDomainDisclaimer";
    EmailexchangeTaskFunction["DELETEEXCHANGESERVICE"] = "deleteExchangeService";
    EmailexchangeTaskFunction["DELETEEXCHANGESERVICEAUTHORIZEDIP"] = "deleteExchangeServiceAuthorizedIp";
    EmailexchangeTaskFunction["DELETEEXPORTPSTREQUEST"] = "deleteExportPstRequest";
    EmailexchangeTaskFunction["DELETEEXTERNALCONTACT"] = "deleteExternalContact";
    EmailexchangeTaskFunction["DELETEFULLACCESS"] = "deleteFullAccess";
    EmailexchangeTaskFunction["DELETEOUTLOOKLICENSE"] = "deleteOutlookLicense";
    EmailexchangeTaskFunction["DELETEPUBLICFOLDER"] = "deletePublicFolder";
    EmailexchangeTaskFunction["DELETEPUBLICFOLDERPERMISSION"] = "deletePublicFolderPermission";
    EmailexchangeTaskFunction["DELETERESOURCEACCOUNT"] = "deleteResourceAccount";
    EmailexchangeTaskFunction["DELETERESOURCEDELEGATE"] = "deleteResourceDelegate";
    EmailexchangeTaskFunction["DELETESENDAS"] = "deleteSendAs";
    EmailexchangeTaskFunction["DELETESENDONBEHALFTO"] = "deleteSendOnBehalfTo";
    EmailexchangeTaskFunction["DELETESHAREDACCOUNT"] = "deleteSharedAccount";
    EmailexchangeTaskFunction["DELETESHAREDACCOUNTFULLACCESS"] = "deleteSharedAccountFullAccess";
    EmailexchangeTaskFunction["DELETESHAREDACCOUNTSENDAS"] = "deleteSharedAccountSendAs";
    EmailexchangeTaskFunction["DELETESHAREDACCOUNTSENDONBEHALFTO"] = "deleteSharedAccountSendOnBehalfTo";
    EmailexchangeTaskFunction["DESTROYPRIVATEVM"] = "destroyPrivateVm";
    EmailexchangeTaskFunction["DIAGNOSEACCOUNT"] = "diagnoseAccount";
    EmailexchangeTaskFunction["EXPANDDRIVE"] = "expandDrive";
    EmailexchangeTaskFunction["GENERATEOUTLOOKURL"] = "generateOutlookUrl";
    EmailexchangeTaskFunction["GENERATEPSTURL"] = "generatePstUrl";
    EmailexchangeTaskFunction["INSTALLEXCHANGE"] = "installExchange";
    EmailexchangeTaskFunction["INSTALLSSL"] = "installSSL";
    EmailexchangeTaskFunction["MAINTENANCE"] = "maintenance";
    EmailexchangeTaskFunction["MIGRATIONACCOUNT"] = "migrationAccount";
    EmailexchangeTaskFunction["MIGRATIONDISCLAIMER"] = "migrationDisclaimer";
    EmailexchangeTaskFunction["MIGRATIONEXTERNALCONTACT"] = "migrationExternalContact";
    EmailexchangeTaskFunction["MIGRATIONHISTORY"] = "migrationHistory";
    EmailexchangeTaskFunction["MIGRATIONMAILINGLIST"] = "migrationMailingList";
    EmailexchangeTaskFunction["MIGRATIONRESOURCEACCOUNT"] = "migrationResourceAccount";
    EmailexchangeTaskFunction["MIGRATIONSERVICE"] = "migrationService";
    EmailexchangeTaskFunction["REOPENHOSTEDACCOUNT"] = "reOpenHostedAccount";
    EmailexchangeTaskFunction["REOPENOUTLOOKLICENSE"] = "reOpenOutlookLicense";
    EmailexchangeTaskFunction["REOPENPRIVATEACCOUNT"] = "reOpenPrivateAccount";
    EmailexchangeTaskFunction["REOPENPRIVATEVM"] = "reOpenPrivateVm";
    EmailexchangeTaskFunction["SETACCOUNT"] = "setAccount";
    EmailexchangeTaskFunction["SETACCOUNTARCHIVE"] = "setAccountArchive";
    EmailexchangeTaskFunction["SETALIAS"] = "setAlias";
    EmailexchangeTaskFunction["SETDISTRIBUTIONGROUP"] = "setDistributionGroup";
    EmailexchangeTaskFunction["SETDNS"] = "setDns";
    EmailexchangeTaskFunction["SETDOMAIN"] = "setDomain";
    EmailexchangeTaskFunction["SETDOMAINDISCLAIMER"] = "setDomainDisclaimer";
    EmailexchangeTaskFunction["SETEXCHANGEACCOUNTPROTOCOL"] = "setExchangeAccountProtocol";
    EmailexchangeTaskFunction["SETEXCHANGESERVICEDEVICE"] = "setExchangeServiceDevice";
    EmailexchangeTaskFunction["SETEXTERNALCONTACT"] = "setExternalContact";
    EmailexchangeTaskFunction["SETPUBLICFOLDER"] = "setPublicFolder";
    EmailexchangeTaskFunction["SETPUBLICFOLDERPERMISSION"] = "setPublicFolderPermission";
    EmailexchangeTaskFunction["SETRESOURCEACCOUNT"] = "setResourceAccount";
    EmailexchangeTaskFunction["SETSERVICE"] = "setService";
    EmailexchangeTaskFunction["SETSHAREDACCOUNT"] = "setSharedAccount";
    EmailexchangeTaskFunction["SUSPENDACCOUNT"] = "suspendAccount";
    EmailexchangeTaskFunction["SUSPENDEXCHANGESERVICE"] = "suspendExchangeService";
    EmailexchangeTaskFunction["SUSPENDHOSTEDACCOUNT"] = "suspendHostedAccount";
    EmailexchangeTaskFunction["SUSPENDOUTLOOKLICENSE"] = "suspendOutlookLicense";
    EmailexchangeTaskFunction["SUSPENDPRIVATEACCOUNT"] = "suspendPrivateAccount";
    EmailexchangeTaskFunction["SUSPENDPRIVATEVM"] = "suspendPrivateVm";
    EmailexchangeTaskFunction["UNSUSPENDACCOUNT"] = "unsuspendAccount";
    EmailexchangeTaskFunction["UNSUSPENDEXCHANGESERVICE"] = "unsuspendExchangeService";
    EmailexchangeTaskFunction["UNSUSPENDHOSTEDACCOUNT"] = "unsuspendHostedAccount";
    EmailexchangeTaskFunction["UPDATEEXCHANGESERVICEDEVICE"] = "updateExchangeServiceDevice";
    EmailexchangeTaskFunction["UPGRADE2016"] = "upgrade2016";
})(EmailexchangeTaskFunction = exports.EmailexchangeTaskFunction || (exports.EmailexchangeTaskFunction = {}));
/*
 * Exchange task status
 */
var EmailexchangeTaskStatus;
(function (EmailexchangeTaskStatus) {
    EmailexchangeTaskStatus["CANCELLED"] = "cancelled";
    EmailexchangeTaskStatus["DOING"] = "doing";
    EmailexchangeTaskStatus["DONE"] = "done";
    EmailexchangeTaskStatus["ERROR"] = "error";
    EmailexchangeTaskStatus["TODO"] = "todo";
})(EmailexchangeTaskStatus = exports.EmailexchangeTaskStatus || (exports.EmailexchangeTaskStatus = {}));
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
class EmailExchange {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the MSSERVICES service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange#GET)
     */
    ListAvailableServices() {
        let url = `/email/exchange`;
        return this.client.request('GET', url);
    }
    /**
     * Operations about the EXCHANGE service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service#GET)
     */
    /*
    ListAvailableServices(organizationName: string): Promise<string[]> {
      let url = `/email/exchange/${organizationName}/service`
  
      return this.client.request<string[]>('GET', url)
    }
    */
    /**
     * Exchange service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D#GET)
     */
    GetThisObjectProperties(exchangeService, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}`;
        return this.client.request('GET', url);
    }
    /**
     * Exchange service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D#PUT)
     */
    AlterThisObjectProperties(exchangeService, organizationName, payload) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the email.exchange.Account objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account#GET)
     */
    AccountsAssociatedToThisExchangeService(exchangeService, organizationName, accountLicense, id, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account?`;
        const queryParams = new query_params_1.default();
        if (accountLicense) {
            queryParams.set('accountLicense', accountLicense.toString());
        }
        if (id) {
            queryParams.set('id', id.toString());
        }
        if (primaryEmailAddress) {
            queryParams.set('primaryEmailAddress', primaryEmailAddress);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.exchange.Account objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account#POST)
     */
    CreateNewMailboxInExchangeServer(domain, exchangeService, license, login, organizationName, password, company, displayName, firstName, hiddenFromGAL, initials, lastName, litigation, litigationPeriod, mailingFilter, outlookLicense, SAMAccountName, spamAndVirusConfiguration) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account`;
        return this.client.request('POST', url, { domain, license, login, password, company, displayName, firstName, hiddenFromGAL, initials, lastName, litigation, litigationPeriod, mailingFilter, outlookLicense, SAMAccountName, spamAndVirusConfiguration });
    }
    /**
     * Exchange mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeAccount> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}`
  
      return this.client.request<EmailexchangeAccount>('GET', url)
    }
    */
    /**
     * Exchange mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D#PUT)
     */
    /*
    AlterThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string, payload: EmailexchangeAccount): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Exchange mailbox [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D#DELETE)
     */
    DeleteExistingMailboxInExchangeServer(exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.exchange.exchangeAccountAlias objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/alias#GET)
     */
    AliasesAssociatedToThisMailbox(exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/alias`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeAccountAlias objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/alias#POST)
     */
    CreateNewAlias(alias, exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/alias`;
        return this.client.request('POST', url, { alias });
    }
    /**
     * Aliases on this mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/alias/%7Balias%7D#GET)
     */
    /*
    GetThisObjectProperties(alias: string, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountAlias> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/alias/${alias}`
  
      return this.client.request<EmailexchangeexchangeAccountAlias>('GET', url)
    }
    */
    /**
     * Aliases on this mailbox [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/alias/%7Balias%7D#DELETE)
     */
    DeleteExistingAlias(alias, exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/alias/${alias}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Exchange Account Archive [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/archive#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountArchive> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/archive`
  
      return this.client.request<EmailexchangeexchangeAccountArchive>('GET', url)
    }
    */
    /**
     * Exchange Account Archive [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/archive#PUT)
     */
    /*
    AlterThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string, payload: EmailexchangeexchangeAccountArchive): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/archive`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Exchange Account Archive [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/archive#POST)
     */
    CreateNewArchiveMailbox(exchangeService, organizationName, primaryEmailAddress, quota) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/archive`;
        return this.client.request('POST', url, { quota });
    }
    /**
     * Exchange Account Archive [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/archive#DELETE)
     */
    DeleteExistingArchiveMailbox(exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/archive`;
        return this.client.request('DELETE', url);
    }
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/changePassword#POST)
     */
    ChangeMailboxPassword(exchangeService, organizationName, password, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * Exchange Account Diagnosis [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/diagnostics#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountDiagnosis> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/diagnostics`
  
      return this.client.request<EmailexchangeexchangeAccountDiagnosis>('GET', url)
    }
    */
    /**
     * Exchange Account Diagnosis [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/diagnostics#POST)
     */
    CreateNewDiagnosisRequest(exchangeService, organizationName, password, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/diagnostics`;
        return this.client.request('POST', url, { password });
    }
    /**
     * Export PST file request [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/export#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeExport> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/export`
  
      return this.client.request<EmailexchangeExport>('GET', url)
    }
    */
    /**
     * Export PST file request [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/export#POST)
     */
    RequestPSTFileForTheAccount(exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/export`;
        return this.client.request('POST', url);
    }
    /**
     * Export PST file request [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/export#DELETE)
     */
    RemoveRequestOfPSTFile(exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/export`;
        return this.client.request('DELETE', url);
    }
    /**
     * Export PST file url [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/exportURL#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeExportUrl> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/exportURL`
  
      return this.client.request<EmailexchangeExportUrl>('GET', url)
    }
    */
    /**
     * Export PST file url [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/exportURL#POST)
     */
    GenerateTemporaryUrlToPSTFile(exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/exportURL`;
        return this.client.request('POST', url);
    }
    /**
     * List the email.exchange.exchangeAccountFullAccess objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/fullAccess#GET)
     */
    FullAccessGrantedUsersForThisMailbox(exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/fullAccess`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeAccountFullAccess objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/fullAccess#POST)
     */
    AllowFullAccessToAUser(allowedAccountId, exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/fullAccess`;
        return this.client.request('POST', url, { allowedAccountId });
    }
    /**
     * Users having full access on this mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/fullAccess/%7BallowedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountFullAccess> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/fullAccess/${allowedAccountId}`
  
      return this.client.request<EmailexchangeexchangeAccountFullAccess>('GET', url)
    }
    */
    /**
     * Users having full access on this mailbox [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/fullAccess/%7BallowedAccountId%7D#DELETE)
     */
    RevokeFullAccess(allowedAccountId, exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/fullAccess/${allowedAccountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Outlook url [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/outlookURL#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeOutlookUrl> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/outlookURL`
  
      return this.client.request<EmailexchangeOutlookUrl>('GET', url)
    }
    */
    /**
     * Outlook url [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/outlookURL#POST)
     */
    GenerateOutlookUrl(exchangeService, language, organizationName, primaryEmailAddress, version) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/outlookURL`;
        return this.client.request('POST', url, { language, version });
    }
    /**
     * Get protocol status on that mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/protocol#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountProtocol> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/protocol`
  
      return this.client.request<EmailexchangeexchangeAccountProtocol>('GET', url)
    }
    */
    /**
     * Get protocol status on that mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/protocol#PUT)
     */
    /*
    AlterThisObjectProperties(exchangeService: string, organizationName: string, primaryEmailAddress: string, payload: EmailexchangeexchangeAccountProtocol): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/protocol`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the email.exchange.exchangeAccountSendAs objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendAs#GET)
     */
    SendAsGrantedUsersForThisMailbox(exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendAs`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeAccountSendAs objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendAs#POST)
     */
    AllowAnotherUserToSendMailsFromThisMailbox(allowAccountId, exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendAs`;
        return this.client.request('POST', url, { allowAccountId });
    }
    /**
     * Users authorized to send mails from this mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendAs/%7BallowedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountSendAs> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendAs/${allowedAccountId}`
  
      return this.client.request<EmailexchangeexchangeAccountSendAs>('GET', url)
    }
    */
    /**
     * Users authorized to send mails from this mailbox [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendAs/%7BallowedAccountId%7D#DELETE)
     */
    DeleteAllowedUserForSendAs(allowedAccountId, exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendAs/${allowedAccountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.exchange.exchangeAccountSendOnBehalfTo objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendOnBehalfTo#GET)
     */
    SendOnBehalfToGrantedUsersForThisMailbox(exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendOnBehalfTo`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeAccountSendOnBehalfTo objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendOnBehalfTo#POST)
     */
    AllowAnotherUserToSendOnBehalfToMailsFromThisMailbox(allowAccountId, exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendOnBehalfTo`;
        return this.client.request('POST', url, { allowAccountId });
    }
    /**
     * Get users authorized to Send On Behalf To mails from this mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendOnBehalfTo/%7BallowedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeexchangeAccountSendOnBehalfTo> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendOnBehalfTo/${allowedAccountId}`
  
      return this.client.request<EmailexchangeexchangeAccountSendOnBehalfTo>('GET', url)
    }
    */
    /**
     * Get users authorized to Send On Behalf To mails from this mailbox [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/sendOnBehalfTo/%7BallowedAccountId%7D#DELETE)
     */
    DeleteAllowedUserForSendOnBehalfTo(allowedAccountId, exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/sendOnBehalfTo/${allowedAccountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.exchange.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/tasks#GET)
     */
    PendingTaskForThisMailbox(exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/tasks`;
        return this.client.request('GET', url);
    }
    /**
     * Exchange task details [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/tasks/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, id: number, organizationName: string, primaryEmailAddress: string): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/tasks/${id}`
  
      return this.client.request<EmailexchangeTask>('GET', url)
    }
    */
    /**
     * terminate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/account/%7BprimaryEmailAddress%7D/terminate#POST)
     */
    TerminateAccountAtExpirationDate(exchangeService, organizationName, primaryEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/account/${primaryEmailAddress}/terminate`;
        return this.client.request('POST', url);
    }
    /**
     * activateSharepoint operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/activateSharepoint#POST)
     */
    ActivateSharepointInfraConnectedToThisExchangeService(exchangeService, organizationName, primaryEmailAddress, subDomain) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/activateSharepoint`;
        return this.client.request('POST', url, { primaryEmailAddress, subDomain });
    }
    /**
     * changeHostname operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/changeHostname#POST)
     */
    SettingSSLHostnameForExchangePrivateOffer(dcvEmail, exchangeService, hostname, organizationName, useDnsAssist) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/changeHostname`;
        return this.client.request('POST', url, { dcvEmail, hostname, useDnsAssist });
    }
    /**
     * dcvEmails operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/dcvEmails#GET)
     */
    GetDCVEmailsIfYourSslWillExpireInNext30Days(exchangeService, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/dcvEmails`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeServiceDevice objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/device#GET)
     */
    ListOfYourActiveSyncDevicesRegisteredOnThisExchangeService(exchangeService, organizationName, deviceState, identity, IMEI) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/device?`;
        const queryParams = new query_params_1.default();
        if (deviceState) {
            queryParams.set('deviceState', deviceState.toString());
        }
        if (identity) {
            queryParams.set('identity', identity);
        }
        if (IMEI) {
            queryParams.set('IMEI', IMEI);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get the list of your ActiveSync devices registered on this Exchange service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/device/%7Bidentity%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, identity: string, organizationName: string): Promise<EmailexchangeexchangeServiceDevice> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/device/${identity}`
  
      return this.client.request<EmailexchangeexchangeServiceDevice>('GET', url)
    }
    */
    /**
     * Get the list of your ActiveSync devices registered on this Exchange service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/device/%7Bidentity%7D#PUT)
     */
    /*
    AlterThisObjectProperties(exchangeService: string, identity: string, organizationName: string, payload: EmailexchangeexchangeServiceDevice): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/device/${identity}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * clearDevice operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/device/%7Bidentity%7D/clearDevice#POST)
     */
    ExecutesAFactoryResetOnTheDeviceTHISOPERATIONCANNOTBEREVERSEDALLDATAONTHEDEVICEWILLBELOST(exchangeService, identity, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/device/${identity}/clearDevice`;
        return this.client.request('POST', url);
    }
    /**
     * List the email.exchange.Domain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain#GET)
     */
    DomainsAssociatedToThisService(exchangeService, organizationName, main, state) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain?`;
        const queryParams = new query_params_1.default();
        if (main) {
            queryParams.set('main', main.toString());
        }
        if (state) {
            queryParams.set('state', state.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.exchange.Domain objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain#POST)
     */
    CreateNewDomainInExchangeServices(exchangeService, name, organizationName, type, configureAutodiscover, configureMx, main, mxRelay, organization2010) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain`;
        return this.client.request('POST', url, { name, type, configureAutodiscover, configureMx, main, mxRelay, organization2010 });
    }
    /**
     * Exchange domain [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D#GET)
     */
    /*
    GetThisObjectProperties(domainName: string, exchangeService: string, organizationName: string): Promise<EmailexchangeDomain> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}`
  
      return this.client.request<EmailexchangeDomain>('GET', url)
    }
    */
    /**
     * Exchange domain [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D#PUT)
     */
    /*
    AlterThisObjectProperties(domainName: string, exchangeService: string, organizationName: string, payload: EmailexchangeDomain): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Exchange domain [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D#DELETE)
     */
    DeleteExistingDomainInExchangeServices(domainName, exchangeService, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Exchange organization disclaimer [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D/disclaimer#GET)
     */
    /*
    GetThisObjectProperties(domainName: string, exchangeService: string, organizationName: string): Promise<Emailexchangedisclaimer> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimer`
  
      return this.client.request<Emailexchangedisclaimer>('GET', url)
    }
    */
    /**
     * Exchange organization disclaimer [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D/disclaimer#PUT)
     */
    /*
    AlterThisObjectProperties(domainName: string, exchangeService: string, organizationName: string, payload: Emailexchangedisclaimer): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimer`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Exchange organization disclaimer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D/disclaimer#POST)
     */
    CreateOrganizationDisclaimerOfEachEmail(content, domainName, exchangeService, organizationName, outsideOnly) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimer`;
        return this.client.request('POST', url, { content, outsideOnly });
    }
    /**
     * Exchange organization disclaimer [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D/disclaimer#DELETE)
     */
    DeleteExistingOrganizationDisclaimer(domainName, exchangeService, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimer`;
        return this.client.request('DELETE', url);
    }
    /**
     * disclaimerAttribute operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/domain/%7BdomainName%7D/disclaimerAttribute#GET)
     */
    GetDiclaimerAttributesToSubstituteWithActiveDirectoryProperties(domainName, exchangeService, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/domain/${domainName}/disclaimerAttribute`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeExternalContact objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/externalContact#GET)
     */
    ExternalContactsForThisService(exchangeService, organizationName, displayName, externalEmailAddress, firstName, id, lastName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/externalContact?`;
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
     * List the email.exchange.exchangeExternalContact objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/externalContact#POST)
     */
    CreateNewExternalContact(exchangeService, externalEmailAddress, organizationName, displayName, firstName, hiddenFromGAL, initials, lastName, organization2010) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/externalContact`;
        return this.client.request('POST', url, { externalEmailAddress, displayName, firstName, hiddenFromGAL, initials, lastName, organization2010 });
    }
    /**
     * External contact for this exchange service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/externalContact/%7BexternalEmailAddress%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, externalEmailAddress: string, organizationName: string): Promise<EmailexchangeexchangeExternalContact> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/externalContact/${externalEmailAddress}`
  
      return this.client.request<EmailexchangeexchangeExternalContact>('GET', url)
    }
    */
    /**
     * External contact for this exchange service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/externalContact/%7BexternalEmailAddress%7D#PUT)
     */
    /*
    AlterThisObjectProperties(exchangeService: string, externalEmailAddress: string, organizationName: string, payload: EmailexchangeexchangeExternalContact): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/externalContact/${externalEmailAddress}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * External contact for this exchange service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/externalContact/%7BexternalEmailAddress%7D#DELETE)
     */
    DeleteExternalContact(exchangeService, externalEmailAddress, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/externalContact/${externalEmailAddress}`;
        return this.client.request('DELETE', url);
    }
    /**
     * license operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/license#GET)
     */
    GetActiveLicensesForSpecificPeriodOfTime(exchangeService, organizationName, fromDate, license, toDate) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/license?`;
        const queryParams = new query_params_1.default();
        if (fromDate) {
            queryParams.set('fromDate', fromDate.toString());
        }
        if (license) {
            queryParams.set('license', license.toString());
        }
        if (toDate) {
            queryParams.set('toDate', toDate.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.exchange.mailingList objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList#GET)
     */
    MailingListForThisService(exchangeService, organizationName, mailingListAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList?`;
        const queryParams = new query_params_1.default();
        if (mailingListAddress) {
            queryParams.set('mailingListAddress', mailingListAddress);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.exchange.mailingList objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList#POST)
     */
    AddMailingList(departRestriction, exchangeService, joinRestriction, mailingListAddress, organizationName, displayName, hiddenFromGAL, maxReceiveSize, maxSendSize, senderAuthentification) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList`;
        return this.client.request('POST', url, { departRestriction, joinRestriction, mailingListAddress, displayName, hiddenFromGAL, maxReceiveSize, maxSendSize, senderAuthentification });
    }
    /**
     * Mailing list [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangemailingList> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}`
  
      return this.client.request<EmailexchangemailingList>('GET', url)
    }
    */
    /**
     * Mailing list [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D#PUT)
     */
    /*
    AlterThisObjectProperties(exchangeService: string, mailingListAddress: string, organizationName: string, payload: EmailexchangemailingList): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Mailing list [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D#DELETE)
     */
    DeleteMailingList(exchangeService, mailingListAddress, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.exchange.exchangeMailingListAlias objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/alias#GET)
     */
    AliasesAssociatedToThisMailingList(exchangeService, mailingListAddress, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/alias`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeMailingListAlias objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/alias#POST)
     */
    /*
    CreateNewAlias(alias: string, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/alias`
  
      return this.client.request<EmailexchangeTask>('POST', url, {alias})
    }
    */
    /**
     * Get aliases on this mailingList [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/alias/%7Balias%7D#GET)
     */
    /*
    GetThisObjectProperties(alias: string, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeexchangeMailingListAlias> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/alias/${alias}`
  
      return this.client.request<EmailexchangeexchangeMailingListAlias>('GET', url)
    }
    */
    /**
     * Get aliases on this mailingList [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/alias/%7Balias%7D#DELETE)
     */
    /*
    DeleteExistingAlias(alias: string, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/alias/${alias}`
  
      return this.client.request<EmailexchangeTask>('DELETE', url)
    }
    */
    /**
     * List the email.exchange.exchangeDistributionGroupManager objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/manager/account#GET)
     */
    MailingListAccountManager(exchangeService, mailingListAddress, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/manager/account`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeDistributionGroupManager objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/manager/account#POST)
     */
    AddNewMailingListManager(exchangeService, mailingListAddress, managerAccountId, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/manager/account`;
        return this.client.request('POST', url, { managerAccountId });
    }
    /**
     * Mailing list managers [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/manager/account/%7BmanagerAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, mailingListAddress: string, managerAccountId: number, organizationName: string): Promise<EmailexchangeexchangeDistributionGroupManager> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/manager/account/${managerAccountId}`
  
      return this.client.request<EmailexchangeexchangeDistributionGroupManager>('GET', url)
    }
    */
    /**
     * Mailing list managers [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/manager/account/%7BmanagerAccountId%7D#DELETE)
     */
    DeleteMailingListManager(exchangeService, mailingListAddress, managerAccountId, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/manager/account/${managerAccountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.exchange.exchangeDistributionGroupMember objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/account#GET)
     */
    MailingListAccountMember(exchangeService, mailingListAddress, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/account`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeDistributionGroupMember objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/account#POST)
     */
    AddNewMailingListMember(exchangeService, mailingListAddress, organizationName, memberAccountId, memberContactId) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/account`;
        return this.client.request('POST', url, { memberAccountId, memberContactId });
    }
    /**
     * Mailing list members [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/account/%7BmemberAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, mailingListAddress: string, memberAccountId: number, organizationName: string): Promise<EmailexchangeexchangeDistributionGroupMember> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/account/${memberAccountId}`
  
      return this.client.request<EmailexchangeexchangeDistributionGroupMember>('GET', url)
    }
    */
    /**
     * Mailing list members [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/account/%7BmemberAccountId%7D#DELETE)
     */
    DeleteMailingListMember(exchangeService, mailingListAddress, memberAccountId, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/account/${memberAccountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.exchange.exchangeDistributionGroupMember objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/contact#GET)
     */
    MailingListContactMember(exchangeService, mailingListAddress, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeDistributionGroupMember objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/contact#POST)
     */
    /*
    AddNewMailingListMember(exchangeService: string, mailingListAddress: string, organizationName: string, memberAccountId?: number, memberContactId?: number): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact`
  
      return this.client.request<EmailexchangeTask>('POST', url, {memberAccountId, memberContactId})
    }
    */
    /**
     * Mailing list members [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/contact/%7BmemberContactId%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, mailingListAddress: string, memberContactId: number, organizationName: string): Promise<EmailexchangeexchangeDistributionGroupMember> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact/${memberContactId}`
  
      return this.client.request<EmailexchangeexchangeDistributionGroupMember>('GET', url)
    }
    */
    /**
     * Mailing list members [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/member/contact/%7BmemberContactId%7D#DELETE)
     */
    /*
    DeleteMailingListMember(exchangeService: string, mailingListAddress: string, memberContactId: number, organizationName: string): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/member/contact/${memberContactId}`
  
      return this.client.request<EmailexchangeTask>('DELETE', url)
    }
    */
    /**
     * List the email.exchange.exchangeDistributionGroupSendAs objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendAs#GET)
     */
    SendAs(exchangeService, mailingListAddress, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendAs`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeDistributionGroupSendAs objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendAs#POST)
     */
    AllowAnotherUserToSendAsoMailsFromThisMailingList(allowAccountId, exchangeService, mailingListAddress, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendAs`;
        return this.client.request('POST', url, { allowAccountId });
    }
    /**
     * Get users authorized to Send On Behalf To mails from this mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendAs/%7BallowedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(allowedAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeexchangeDistributionGroupSendAs> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendAs/${allowedAccountId}`
  
      return this.client.request<EmailexchangeexchangeDistributionGroupSendAs>('GET', url)
    }
    */
    /**
     * Get users authorized to Send On Behalf To mails from this mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendAs/%7BallowedAccountId%7D#DELETE)
     */
    /*
    DeleteAllowedUserForSendAs(allowedAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendAs/${allowedAccountId}`
  
      return this.client.request<EmailexchangeTask>('DELETE', url)
    }
    */
    /**
     * List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendOnBehalfTo#GET)
     */
    SendOnBehalfTo(exchangeService, mailingListAddress, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendOnBehalfTo`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeDistributionGroupSendOnBehalfTo objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendOnBehalfTo#POST)
     */
    /*
    AllowAnotherUserToSendAsoMailsFromThisMailingList(allowAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendOnBehalfTo`
  
      return this.client.request<EmailexchangeTask>('POST', url, {allowAccountId})
    }
    */
    /**
     * Get users authorized to Send On Behalf To mails from this mailing list [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendOnBehalfTo/%7BallowedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(allowedAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeexchangeDistributionGroupSendOnBehalfTo> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendOnBehalfTo/${allowedAccountId}`
  
      return this.client.request<EmailexchangeexchangeDistributionGroupSendOnBehalfTo>('GET', url)
    }
    */
    /**
     * Get users authorized to Send On Behalf To mails from this mailing list [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/mailingList/%7BmailingListAddress%7D/sendOnBehalfTo/%7BallowedAccountId%7D#DELETE)
     */
    /*
    DeleteAllowedUserForSendOnBehalfTo(allowedAccountId: number, exchangeService: string, mailingListAddress: string, organizationName: string): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/mailingList/${mailingListAddress}/sendOnBehalfTo/${allowedAccountId}`
  
      return this.client.request<EmailexchangeTask>('DELETE', url)
    }
    */
    /**
     * outlookAvailability operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/outlookAvailability#GET)
     */
    ShowAvailableOutlooks(exchangeService, organizationName, outlookLanguage, outlookVersion) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/outlookAvailability?`;
        const queryParams = new query_params_1.default();
        if (outlookLanguage) {
            queryParams.set('outlookLanguage', outlookLanguage.toString());
        }
        if (outlookVersion) {
            queryParams.set('outlookVersion', outlookVersion.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Protocol access policy for this Exchange service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/protocol#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, organizationName: string): Promise<EmailexchangeexchangeServiceProtocol> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/protocol`
  
      return this.client.request<EmailexchangeexchangeServiceProtocol>('GET', url)
    }
    */
    /**
     * Protocol access policy for this Exchange service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/protocol#PUT)
     */
    /*
    AlterThisObjectProperties(exchangeService: string, organizationName: string, payload: EmailexchangeexchangeServiceProtocol): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/protocol`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the email.exchange.exchangeServiceActiveSyncNotification objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/protocol/activeSyncMailNotification#GET)
     */
    ExchangeAccountIdSubscribedToActiveSyncQuarantineNotifications(exchangeService, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/protocol/activeSyncMailNotification`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeServiceActiveSyncNotification objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/protocol/activeSyncMailNotification#POST)
     */
    SubscribeNewAddressToActiveSyncQuarantineNotifications(exchangeService, notifiedAccountId, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/protocol/activeSyncMailNotification`;
        return this.client.request('POST', url, { notifiedAccountId });
    }
    /**
     * Get email addresses subscribed to ActiveSync quarantine notifications [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/protocol/activeSyncMailNotification/%7BnotifiedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, notifiedAccountId: number, organizationName: string): Promise<EmailexchangeexchangeServiceActiveSyncNotification> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/protocol/activeSyncMailNotification/${notifiedAccountId}`
  
      return this.client.request<EmailexchangeexchangeServiceActiveSyncNotification>('GET', url)
    }
    */
    /**
     * Get email addresses subscribed to ActiveSync quarantine notifications [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/protocol/activeSyncMailNotification/%7BnotifiedAccountId%7D#DELETE)
     */
    UnubscribeAddressFromActiveSyncQuarantineNotifications(exchangeService, notifiedAccountId, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/protocol/activeSyncMailNotification/${notifiedAccountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.exchange.publicFolder objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder#GET)
     */
    PublicFoldersAssociatedToThisService(exchangeService, organizationName, path) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder?`;
        const queryParams = new query_params_1.default();
        if (path) {
            queryParams.set('path', path);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.exchange.publicFolder objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder#POST)
     */
    CreateOrganizationPublicFolder(exchangeService, organizationName, path, quota, type, anonymousPermission, defaultPermission) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder`;
        return this.client.request('POST', url, { path, quota, type, anonymousPermission, defaultPermission });
    }
    /**
     * Exchange organization public folder [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, organizationName: string, path: string): Promise<EmailexchangepublicFolder> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}`
  
      return this.client.request<EmailexchangepublicFolder>('GET', url)
    }
    */
    /**
     * Exchange organization public folder [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D#PUT)
     */
    /*
    AlterThisObjectProperties(exchangeService: string, organizationName: string, path: string, payload: EmailexchangepublicFolder): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Exchange organization public folder [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D#DELETE)
     */
    DeleteExistingOrganizationPublicFolder(exchangeService, organizationName, path) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.exchange.exchangePublicFolderPermission objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D/permission#GET)
     */
    PublicFolderPermission(exchangeService, organizationName, path) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangePublicFolderPermission objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D/permission#POST)
     */
    CreatePublicFolderPermission(accessRights, allowedAccountId, exchangeService, organizationName, path) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission`;
        return this.client.request('POST', url, { accessRights, allowedAccountId });
    }
    /**
     * Exchange organization public folder permission [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D/permission/%7BallowedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, path: string): Promise<EmailexchangeexchangePublicFolderPermission> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission/${allowedAccountId}`
  
      return this.client.request<EmailexchangeexchangePublicFolderPermission>('GET', url)
    }
    */
    /**
     * Exchange organization public folder permission [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D/permission/%7BallowedAccountId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, path: string, payload: EmailexchangeexchangePublicFolderPermission): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission/${allowedAccountId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Exchange organization public folder permission [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolder/%7Bpath%7D/permission/%7BallowedAccountId%7D#DELETE)
     */
    DeleteExistingPermissionFromPublicFolder(allowedAccountId, exchangeService, organizationName, path) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolder/${path}/permission/${allowedAccountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * publicFolderQuota operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/publicFolderQuota#GET)
     */
    GetPublicFolderQuotaUsageInTotalAvailableSpace(exchangeService, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/publicFolderQuota`;
        return this.client.request('GET', url);
    }
    /**
     * renewSSL operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/renewSSL#POST)
     */
    RenewSSLIfItWillExpireInNext30Days(dcv, exchangeService, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/renewSSL`;
        return this.client.request('POST', url, { dcv });
    }
    /**
     * List the email.exchange.resourceAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount#GET)
     */
    ResourceAccountAssociatedToThisService(exchangeService, organizationName, resourceEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount?`;
        const queryParams = new query_params_1.default();
        if (resourceEmailAddress) {
            queryParams.set('resourceEmailAddress', resourceEmailAddress);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.exchange.resourceAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount#POST)
     */
    CreateNewResourceAccountInExchangeServer(capacity, exchangeService, organizationName, resourceEmailAddress, type, addOrganizerToSubject, allowConflict, bookingWindow, deleteComments, deleteSubject, displayName, location, maximumDuration, showMeetingDetails) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount`;
        return this.client.request('POST', url, { capacity, resourceEmailAddress, type, addOrganizerToSubject, allowConflict, bookingWindow, deleteComments, deleteSubject, displayName, location, maximumDuration, showMeetingDetails });
    }
    /**
     * Exchange resource account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, organizationName: string, resourceEmailAddress: string): Promise<EmailexchangeresourceAccount> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}`
  
      return this.client.request<EmailexchangeresourceAccount>('GET', url)
    }
    */
    /**
     * Exchange resource account [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D#PUT)
     */
    /*
    AlterThisObjectProperties(exchangeService: string, organizationName: string, resourceEmailAddress: string, payload: EmailexchangeresourceAccount): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Exchange resource account [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D#DELETE)
     */
    DeleteExistingResourceAccountInExchangeServer(exchangeService, organizationName, resourceEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.exchange.exchangeResourceAccountDelegate objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D/delegate#GET)
     */
    ResourceAccountManager(exchangeService, organizationName, resourceEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}/delegate`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeResourceAccountDelegate objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D/delegate#POST)
     */
    AddNewResourceAccountDelegateInExchangeServer(allowedAccountId, exchangeService, organizationName, resourceEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}/delegate`;
        return this.client.request('POST', url, { allowedAccountId });
    }
    /**
     * Resource accounts delegates [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D/delegate/%7BallowedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, resourceEmailAddress: string): Promise<EmailexchangeexchangeResourceAccountDelegate> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}/delegate/${allowedAccountId}`
  
      return this.client.request<EmailexchangeexchangeResourceAccountDelegate>('GET', url)
    }
    */
    /**
     * Resource accounts delegates [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/resourceAccount/%7BresourceEmailAddress%7D/delegate/%7BallowedAccountId%7D#DELETE)
     */
    DeleteExistingResourceAccountDelegateInExchangeServer(allowedAccountId, exchangeService, organizationName, resourceEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/resourceAccount/${resourceEmailAddress}/delegate/${allowedAccountId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Exchange server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/server#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, organizationName: string): Promise<EmailexchangeServer> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/server`
  
      return this.client.request<EmailexchangeServer>('GET', url)
    }
    */
    /**
     * Exchange server [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/server#PUT)
     */
    /*
    AlterThisObjectProperties(exchangeService: string, organizationName: string, payload: EmailexchangeServer): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/server`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, organizationName: string): Promise<ServicesService> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(exchangeService: string, organizationName: string, payload: ServicesService): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the email.exchange.sharedAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount#GET)
     */
    SharedAccountsAssociatedToThisExchangeService(exchangeService, organizationName, sharedEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount?`;
        const queryParams = new query_params_1.default();
        if (sharedEmailAddress) {
            queryParams.set('sharedEmailAddress', sharedEmailAddress);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the email.exchange.sharedAccount objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount#POST)
     */
    CreateNewSharedMailboxInExchangeServer(exchangeService, organizationName, quota, sharedEmailAddress, displayName, firstName, hiddenFromGAL, initials, lastName, mailingFilter) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount`;
        return this.client.request('POST', url, { quota, sharedEmailAddress, displayName, firstName, hiddenFromGAL, initials, lastName, mailingFilter });
    }
    /**
     * Exchange shared mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangesharedAccount> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}`
  
      return this.client.request<EmailexchangesharedAccount>('GET', url)
    }
    */
    /**
     * Exchange shared mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D#PUT)
     */
    /*
    AlterThisObjectProperties(exchangeService: string, organizationName: string, sharedEmailAddress: string, payload: EmailexchangesharedAccount): Promise<void> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Exchange shared mailbox [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D#DELETE)
     */
    DeleteExistingSharedMailboxInExchangeServer(exchangeService, organizationName, sharedEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the email.exchange.exchangeSharedAccountFullAccess objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/fullAccess#GET)
     */
    FullAccessGrantedUsersForThisSharedMailbox(exchangeService, organizationName, sharedEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/fullAccess`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeSharedAccountFullAccess objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/fullAccess#POST)
     */
    /*
    AllowFullAccessToAUser(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/fullAccess`
  
      return this.client.request<EmailexchangeTask>('POST', url, {allowedAccountId})
    }
    */
    /**
     * Users having full access on this shared mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/fullAccess/%7BallowedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeexchangeSharedAccountFullAccess> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/fullAccess/${allowedAccountId}`
  
      return this.client.request<EmailexchangeexchangeSharedAccountFullAccess>('GET', url)
    }
    */
    /**
     * Users having full access on this shared mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/fullAccess/%7BallowedAccountId%7D#DELETE)
     */
    /*
    RevokeFullAccess(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/fullAccess/${allowedAccountId}`
  
      return this.client.request<EmailexchangeTask>('DELETE', url)
    }
    */
    /**
     * List the email.exchange.exchangeSharedAccountSendAs objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendAs#GET)
     */
    SendAsGrantedUsersForThisSharedMailbox(exchangeService, organizationName, sharedEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendAs`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeSharedAccountSendAs objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendAs#POST)
     */
    AllowAnotherUserToSendMailsFromThisSharedMailbox(allowAccountId, exchangeService, organizationName, sharedEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendAs`;
        return this.client.request('POST', url, { allowAccountId });
    }
    /**
     * Users authorized to send mails from this shared mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendAs/%7BallowedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeexchangeSharedAccountSendAs> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendAs/${allowedAccountId}`
  
      return this.client.request<EmailexchangeexchangeSharedAccountSendAs>('GET', url)
    }
    */
    /**
     * Users authorized to send mails from this shared mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendAs/%7BallowedAccountId%7D#DELETE)
     */
    /*
    DeleteAllowedUserForSendAs(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendAs/${allowedAccountId}`
  
      return this.client.request<EmailexchangeTask>('DELETE', url)
    }
    */
    /**
     * List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendOnBehalfTo#GET)
     */
    SendOnBehalfToGrantedUsersForThisSharedMailbox(exchangeService, organizationName, sharedEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendOnBehalfTo`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.exchangeSharedAccountSendOnBehalfTo objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendOnBehalfTo#POST)
     */
    AllowAnotherUserToSendOnBehalfToMailsFromThisSharedMailbox(allowAccountId, exchangeService, organizationName, sharedEmailAddress) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendOnBehalfTo`;
        return this.client.request('POST', url, { allowAccountId });
    }
    /**
     * Get users authorized to Send On Behalf To mails from this shared mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendOnBehalfTo/%7BallowedAccountId%7D#GET)
     */
    /*
    GetThisObjectProperties(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeexchangeSharedAccountSendOnBehalfTo> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendOnBehalfTo/${allowedAccountId}`
  
      return this.client.request<EmailexchangeexchangeSharedAccountSendOnBehalfTo>('GET', url)
    }
    */
    /**
     * Get users authorized to Send On Behalf To mails from this shared mailbox [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/sendOnBehalfTo/%7BallowedAccountId%7D#DELETE)
     */
    /*
    DeleteAllowedUserForSendOnBehalfTo(allowedAccountId: number, exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/sendOnBehalfTo/${allowedAccountId}`
  
      return this.client.request<EmailexchangeTask>('DELETE', url)
    }
    */
    /**
     * List the email.exchange.Task objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/tasks#GET)
     */
    /*
    PendingTaskForThisMailbox(exchangeService: string, organizationName: string, sharedEmailAddress: string): Promise<number[]> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/tasks`
  
      return this.client.request<number[]>('GET', url)
    }
    */
    /**
     * Exchange task details [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccount/%7BsharedEmailAddress%7D/tasks/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, id: number, organizationName: string, sharedEmailAddress: string): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccount/${sharedEmailAddress}/tasks/${id}`
  
      return this.client.request<EmailexchangeTask>('GET', url)
    }
    */
    /**
     * sharedAccountQuota operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/sharedAccountQuota#GET)
     */
    GetSharedAccountQuotaUsageInTotalAvailableSpace(exchangeService, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/sharedAccountQuota`;
        return this.client.request('GET', url);
    }
    /**
     * List the email.exchange.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/task#GET)
     */
    PendingActions(exchangeService, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/task`;
        return this.client.request('GET', url);
    }
    /**
     * Exchange task details [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/task/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(exchangeService: string, id: number, organizationName: string): Promise<EmailexchangeTask> {
      let url = `/email/exchange/${organizationName}/service/${exchangeService}/task/${id}`
  
      return this.client.request<EmailexchangeTask>('GET', url)
    }
    */
    /**
     * updateDeviceList operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/updateDeviceList#POST)
     */
    UpdateDeviceList(exchangeService, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/updateDeviceList`;
        return this.client.request('POST', url);
    }
    /**
     * updateFlagsOnAllAccounts operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/email/exchange/%7BorganizationName%7D/service/%7BexchangeService%7D/updateFlagsOnAllAccounts#POST)
     */
    UpdateSpamAndVirusFlagsOnAllActiveAccounts(exchangeService, organizationName) {
        let url = `/email/exchange/${organizationName}/service/${exchangeService}/updateFlagsOnAllAccounts`;
        return this.client.request('POST', url);
    }
}
exports.EmailExchange = EmailExchange;
//# sourceMappingURL=email.exchange.js.map