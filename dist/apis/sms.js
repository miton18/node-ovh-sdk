"use strict";
// GENERATED SDK for sms API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * All country prices accessible from a reference
 */
var ReferenceCountry;
(function (ReferenceCountry) {
    ReferenceCountry["ALL"] = "all";
    ReferenceCountry["CA"] = "ca";
    ReferenceCountry["CZ"] = "cz";
    ReferenceCountry["DE"] = "de";
    ReferenceCountry["EN"] = "en";
    ReferenceCountry["ES"] = "es";
    ReferenceCountry["FI"] = "fi";
    ReferenceCountry["FR"] = "fr";
    ReferenceCountry["GB"] = "gb";
    ReferenceCountry["IE"] = "ie";
    ReferenceCountry["IT"] = "it";
    ReferenceCountry["LT"] = "lt";
    ReferenceCountry["MA"] = "ma";
    ReferenceCountry["NL"] = "nl";
    ReferenceCountry["PL"] = "pl";
    ReferenceCountry["PP"] = "pp";
    ReferenceCountry["PT"] = "pt";
    ReferenceCountry["QC"] = "qc";
    ReferenceCountry["RU"] = "ru";
    ReferenceCountry["SK"] = "sk";
    ReferenceCountry["SN"] = "sn";
    ReferenceCountry["TN"] = "tn";
    ReferenceCountry["WE"] = "we";
})(ReferenceCountry = exports.ReferenceCountry || (exports.ReferenceCountry = {}));
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
 * The charset format
 */
var SmsCharset;
(function (SmsCharset) {
    SmsCharset["UTF_8"] = "UTF-8";
})(SmsCharset = exports.SmsCharset || (exports.SmsCharset = {}));
/*
 * The sms class of sms sending job
 */
var SmsClass;
(function (SmsClass) {
    SmsClass["FLASH"] = "flash";
    SmsClass["PHONEDISPLAY"] = "phoneDisplay";
    SmsClass["SIM"] = "sim";
    SmsClass["TOOLKIT"] = "toolkit";
})(SmsClass = exports.SmsClass || (exports.SmsClass = {}));
/*
 * All country suffixes accessible for sms services and "all" available
 */
var SmsCountry;
(function (SmsCountry) {
    SmsCountry["AG"] = "ag";
    SmsCountry["AI"] = "ai";
    SmsCountry["ALL"] = "all";
    SmsCountry["AN"] = "an";
    SmsCountry["AR"] = "ar";
    SmsCountry["AT"] = "at";
    SmsCountry["AU"] = "au";
    SmsCountry["AW"] = "aw";
    SmsCountry["BA"] = "ba";
    SmsCountry["BB"] = "bb";
    SmsCountry["BE"] = "be";
    SmsCountry["BG"] = "bg";
    SmsCountry["BH"] = "bh";
    SmsCountry["BM"] = "bm";
    SmsCountry["BO"] = "bo";
    SmsCountry["BR"] = "br";
    SmsCountry["BZ"] = "bz";
    SmsCountry["CH"] = "ch";
    SmsCountry["CL"] = "cl";
    SmsCountry["CN"] = "cn";
    SmsCountry["CO"] = "co";
    SmsCountry["CR"] = "cr";
    SmsCountry["CU"] = "cu";
    SmsCountry["CY"] = "cy";
    SmsCountry["CZ"] = "cz";
    SmsCountry["DE"] = "de";
    SmsCountry["DK"] = "dk";
    SmsCountry["DM"] = "dm";
    SmsCountry["DZ"] = "dz";
    SmsCountry["EC"] = "ec";
    SmsCountry["EE"] = "ee";
    SmsCountry["EG"] = "eg";
    SmsCountry["ES"] = "es";
    SmsCountry["FI"] = "fi";
    SmsCountry["FR"] = "fr";
    SmsCountry["GB"] = "gb";
    SmsCountry["GD"] = "gd";
    SmsCountry["GP"] = "gp";
    SmsCountry["GR"] = "gr";
    SmsCountry["GY"] = "gy";
    SmsCountry["HK"] = "hk";
    SmsCountry["HN"] = "hn";
    SmsCountry["HR"] = "hr";
    SmsCountry["HT"] = "ht";
    SmsCountry["HU"] = "hu";
    SmsCountry["ID"] = "id";
    SmsCountry["IE"] = "ie";
    SmsCountry["IL"] = "il";
    SmsCountry["IN"] = "in";
    SmsCountry["IS"] = "is";
    SmsCountry["IT"] = "it";
    SmsCountry["JM"] = "jm";
    SmsCountry["JO"] = "jo";
    SmsCountry["JP"] = "jp";
    SmsCountry["KR"] = "kr";
    SmsCountry["KW"] = "kw";
    SmsCountry["KY"] = "ky";
    SmsCountry["LB"] = "lb";
    SmsCountry["LC"] = "lc";
    SmsCountry["LT"] = "lt";
    SmsCountry["LU"] = "lu";
    SmsCountry["LV"] = "lv";
    SmsCountry["MA"] = "ma";
    SmsCountry["ME"] = "me";
    SmsCountry["MQ"] = "mq";
    SmsCountry["MS"] = "ms";
    SmsCountry["MT"] = "mt";
    SmsCountry["MY"] = "my";
    SmsCountry["NC"] = "nc";
    SmsCountry["NG"] = "ng";
    SmsCountry["NL"] = "nl";
    SmsCountry["NO"] = "no";
    SmsCountry["NZ"] = "nz";
    SmsCountry["PA"] = "pa";
    SmsCountry["PE"] = "pe";
    SmsCountry["PF"] = "pf";
    SmsCountry["PH"] = "ph";
    SmsCountry["PK"] = "pk";
    SmsCountry["PL"] = "pl";
    SmsCountry["PT"] = "pt";
    SmsCountry["PY"] = "py";
    SmsCountry["RE"] = "re";
    SmsCountry["RO"] = "ro";
    SmsCountry["RS"] = "rs";
    SmsCountry["RU"] = "ru";
    SmsCountry["SA"] = "sa";
    SmsCountry["SE"] = "se";
    SmsCountry["SG"] = "sg";
    SmsCountry["SI"] = "si";
    SmsCountry["SK"] = "sk";
    SmsCountry["SR"] = "sr";
    SmsCountry["TC"] = "tc";
    SmsCountry["TH"] = "th";
    SmsCountry["TN"] = "tn";
    SmsCountry["TR"] = "tr";
    SmsCountry["TT"] = "tt";
    SmsCountry["TW"] = "tw";
    SmsCountry["UA"] = "ua";
    SmsCountry["UY"] = "uy";
    SmsCountry["VC"] = "vc";
    SmsCountry["VE"] = "ve";
    SmsCountry["VG"] = "vg";
    SmsCountry["VN"] = "vn";
    SmsCountry["ZA"] = "za";
})(SmsCountry = exports.SmsCountry || (exports.SmsCountry = {}));
/*
 * Way type
 */
var SmsDocumentWayType;
(function (SmsDocumentWayType) {
    SmsDocumentWayType["INCOMING"] = "incoming";
    SmsDocumentWayType["OUTGOING"] = "outgoing";
})(SmsDocumentWayType = exports.SmsDocumentWayType || (exports.SmsDocumentWayType = {}));
/*
 * The sms coding
 */
var SmsHlrStatuses;
(function (SmsHlrStatuses) {
    SmsHlrStatuses["DOING"] = "doing";
    SmsHlrStatuses["DONE"] = "done";
    SmsHlrStatuses["ERROR"] = "error";
    SmsHlrStatuses["TODO"] = "todo";
})(SmsHlrStatuses = exports.SmsHlrStatuses || (exports.SmsHlrStatuses = {}));
/*
 * The priority of an sms sending
 */
var SmsPriority;
(function (SmsPriority) {
    SmsPriority["HIGH"] = "high";
    SmsPriority["LOW"] = "low";
    SmsPriority["MEDIUM"] = "medium";
    SmsPriority["VERYLOW"] = "veryLow";
})(SmsPriority = exports.SmsPriority || (exports.SmsPriority = {}));
/*
 * All typology of ptt duration
 */
var SmsPttDurationType;
(function (SmsPttDurationType) {
    SmsPttDurationType["INDETERMINATED"] = "indeterminated";
    SmsPttDurationType["PERMANENT"] = "permanent";
    SmsPttDurationType["TEMPORARY"] = "temporary";
})(SmsPttDurationType = exports.SmsPttDurationType || (exports.SmsPttDurationType = {}));
/*
 * Current quota status
 */
var SmsQuotaStatusUser;
(function (SmsQuotaStatusUser) {
    SmsQuotaStatusUser["ACTIVE"] = "active";
    SmsQuotaStatusUser["INACTIVE"] = "inactive";
})(SmsQuotaStatusUser = exports.SmsQuotaStatusUser || (exports.SmsQuotaStatusUser = {}));
/*
 * All tyoplogy of senders
 */
var SmsRefererSender;
(function (SmsRefererSender) {
    SmsRefererSender["CUSTOM"] = "custom";
    SmsRefererSender["DOMAIN"] = "domain";
    SmsRefererSender["LINE"] = "line";
    SmsRefererSender["NIC"] = "nic";
    SmsRefererSender["OWNER"] = "owner";
    SmsRefererSender["VIRTUAL"] = "virtual";
})(SmsRefererSender = exports.SmsRefererSender || (exports.SmsRefererSender = {}));
/*
 * The tracking media response
 */
var SmsResponseTrackingMedia;
(function (SmsResponseTrackingMedia) {
    SmsResponseTrackingMedia["EMAIL"] = "email";
    SmsResponseTrackingMedia["SMS"] = "sms";
    SmsResponseTrackingMedia["VOICE"] = "voice";
})(SmsResponseTrackingMedia = exports.SmsResponseTrackingMedia || (exports.SmsResponseTrackingMedia = {}));
/*
 * Response type
 */
var SmsResponseType;
(function (SmsResponseType) {
    SmsResponseType["CGI"] = "cgi";
    SmsResponseType["NONE"] = "none";
    SmsResponseType["TEXT"] = "text";
})(SmsResponseType = exports.SmsResponseType || (exports.SmsResponseType = {}));
/*
 * Restriction type used by the operator to filter sms.
 */
var SmsRestrictionCode;
(function (SmsRestrictionCode) {
    SmsRestrictionCode["ALPHA"] = "ALPHA";
    SmsRestrictionCode["BAD_DLR"] = "BAD_DLR";
    SmsRestrictionCode["BLOCKED"] = "BLOCKED";
    SmsRestrictionCode["CODING"] = "CODING";
    SmsRestrictionCode["DLR"] = "DLR";
    SmsRestrictionCode["FLASHONLY"] = "FLASHONLY";
    SmsRestrictionCode["MSISDN"] = "MSISDN";
})(SmsRestrictionCode = exports.SmsRestrictionCode || (exports.SmsRestrictionCode = {}));
/*
 * The referer of the available sender
 */
var SmsSenderReferer;
(function (SmsSenderReferer) {
    SmsSenderReferer["DOMAIN"] = "domain";
    SmsSenderReferer["NICHANDLE"] = "nichandle";
})(SmsSenderReferer = exports.SmsSenderReferer || (exports.SmsSenderReferer = {}));
/*
 * Account status
 */
var SmsStatusAccount;
(function (SmsStatusAccount) {
    SmsStatusAccount["DISABLE"] = "disable";
    SmsStatusAccount["ENABLE"] = "enable";
})(SmsStatusAccount = exports.SmsStatusAccount || (exports.SmsStatusAccount = {}));
/*
 * All existing status for a given referer
 */
var SmsStatusSender;
(function (SmsStatusSender) {
    SmsStatusSender["DISABLE"] = "disable";
    SmsStatusSender["ENABLE"] = "enable";
    SmsStatusSender["REFUSED"] = "refused";
    SmsStatusSender["WAITINGVALIDATION"] = "waitingValidation";
})(SmsStatusSender = exports.SmsStatusSender || (exports.SmsStatusSender = {}));
/*
 * The media support used to be contacted in case of alert
 */
var SmsSupport;
(function (SmsSupport) {
    SmsSupport["BOTH"] = "both";
    SmsSupport["MAIL"] = "mail";
    SmsSupport["SMS"] = "sms";
})(SmsSupport = exports.SmsSupport || (exports.SmsSupport = {}));
/*
 * The task function
 */
var SmsTodoGeneralPublicFunctions;
(function (SmsTodoGeneralPublicFunctions) {
    SmsTodoGeneralPublicFunctions["CLEANSMSRECEIVERS"] = "cleanSmsReceivers";
})(SmsTodoGeneralPublicFunctions = exports.SmsTodoGeneralPublicFunctions || (exports.SmsTodoGeneralPublicFunctions = {}));
/*
 * The task step
 */
var SmsTodoGeneralPublicSteps;
(function (SmsTodoGeneralPublicSteps) {
    SmsTodoGeneralPublicSteps["CHECKORDER"] = "checkOrder";
    SmsTodoGeneralPublicSteps["CREATEHLRS"] = "createHlrs";
    SmsTodoGeneralPublicSteps["FINISHING"] = "finishing";
    SmsTodoGeneralPublicSteps["SENDMAILREPORT"] = "sendMailReport";
    SmsTodoGeneralPublicSteps["STARTING"] = "starting";
    SmsTodoGeneralPublicSteps["WAITFORHLRS"] = "waitForHlrs";
})(SmsTodoGeneralPublicSteps = exports.SmsTodoGeneralPublicSteps || (exports.SmsTodoGeneralPublicSteps = {}));
/*
 * All existing types for a given sender
 */
var SmsTypeSender;
(function (SmsTypeSender) {
    SmsTypeSender["ALPHA"] = "alpha";
    SmsTypeSender["NUMERIC"] = "numeric";
    SmsTypeSender["VIRTUAL"] = "virtual";
})(SmsTypeSender = exports.SmsTypeSender || (exports.SmsTypeSender = {}));
/*
 * All existing types for a given template
 */
var SmsTypeTemplate;
(function (SmsTypeTemplate) {
    SmsTypeTemplate["ALERTING"] = "alerting";
    SmsTypeTemplate["AUTHENTIFICATION"] = "authentification";
    SmsTypeTemplate["TRANSACTIONAL"] = "transactional";
})(SmsTypeTemplate = exports.SmsTypeTemplate || (exports.SmsTypeTemplate = {}));
/*
 * The ISO formated country code of the number
 */
var SmsVirtualNumberIsoCountryCode;
(function (SmsVirtualNumberIsoCountryCode) {
    SmsVirtualNumberIsoCountryCode["BE"] = "be";
    SmsVirtualNumberIsoCountryCode["CH"] = "ch";
    SmsVirtualNumberIsoCountryCode["DE"] = "de";
    SmsVirtualNumberIsoCountryCode["ES"] = "es";
    SmsVirtualNumberIsoCountryCode["FR"] = "fr";
    SmsVirtualNumberIsoCountryCode["UK"] = "uk";
})(SmsVirtualNumberIsoCountryCode = exports.SmsVirtualNumberIsoCountryCode || (exports.SmsVirtualNumberIsoCountryCode = {}));
/*
 * Export file format
 */
var TelephonyContactsExportFormats;
(function (TelephonyContactsExportFormats) {
    TelephonyContactsExportFormats["CSV"] = "csv";
})(TelephonyContactsExportFormats = exports.TelephonyContactsExportFormats || (exports.TelephonyContactsExportFormats = {}));
/*
 * File providing task status
 */
var TelephonyPcsFileStatus;
(function (TelephonyPcsFileStatus) {
    TelephonyPcsFileStatus["DOING"] = "doing";
    TelephonyPcsFileStatus["DONE"] = "done";
    TelephonyPcsFileStatus["ERROR"] = "error";
    TelephonyPcsFileStatus["TODO"] = "todo";
})(TelephonyPcsFileStatus = exports.TelephonyPcsFileStatus || (exports.TelephonyPcsFileStatus = {}));
/*
 * Task status
 */
var TelephonyTaskStatus;
(function (TelephonyTaskStatus) {
    TelephonyTaskStatus["DOING"] = "doing";
    TelephonyTaskStatus["DONE"] = "done";
    TelephonyTaskStatus["ERROR"] = "error";
    TelephonyTaskStatus["PAUSE"] = "pause";
    TelephonyTaskStatus["TODO"] = "todo";
})(TelephonyTaskStatus = exports.TelephonyTaskStatus || (exports.TelephonyTaskStatus = {}));
class Sms {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the VOIP service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms#GET)
     */
    ListAvailableServices() {
        let url = `/sms`;
        return this.client.request('GET', url);
    }
    /**
     * SMS details [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/sms/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * SMS details [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/sms/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * List the sms.Blacklist objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/blacklists#GET)
     */
    NumbersBlacklistedAssociatedToTheSmsAccount(serviceName) {
        let url = `/sms/${serviceName}/blacklists`;
        return this.client.request('GET', url);
    }
    /**
     * SMS blacklist [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/blacklists/%7Bnumber%7D#GET)
     */
    /*
    GetThisObjectProperties(number: string, serviceName: string): Promise<SmsBlacklist> {
      let url = `/sms/${serviceName}/blacklists/${number}`
  
      return this.client.request<SmsBlacklist>('GET', url)
    }
    */
    /**
     * SMS blacklist [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/blacklists/%7Bnumber%7D#DELETE)
     */
    DeleteTheBlacklistedSmsNumberGiven(number, serviceName) {
        let url = `/sms/${serviceName}/blacklists/${number}`;
        return this.client.request('DELETE', url);
    }
    /**
     * document operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/document#GET)
     */
    GetTheMedocumentIdGenerated(serviceName, wayType, creationDatetimeFrom, creationDatetimeTo, tag) {
        let url = `/sms/${serviceName}/document?`;
        const queryParams = new query_params_1.default();
        if (wayType) {
            queryParams.set('wayType', wayType.toString());
        }
        if (creationDatetimeFrom) {
            queryParams.set('creationDatetime.from', creationDatetimeFrom.toString());
        }
        if (creationDatetimeTo) {
            queryParams.set('creationDatetime.to', creationDatetimeTo.toString());
        }
        if (tag) {
            queryParams.set('tag', tag);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * exceptions operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/exceptions#GET)
     */
    DescribeFilterExceptionsInSmsSendingFromASpecificReceiver(receiver, serviceName) {
        let url = `/sms/${serviceName}/exceptions?`;
        const queryParams = new query_params_1.default();
        if (receiver) {
            queryParams.set('receiver', receiver);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the sms.HlrLookupNumber objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/hlr#GET)
     */
    HomeLocationRegisterInformationsGiveInformationsAboutAGivenCellularPhone(serviceName) {
        let url = `/sms/${serviceName}/hlr`;
        return this.client.request('GET', url);
    }
    /**
     * List the sms.HlrLookupNumber objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/hlr#POST)
     */
    AddOneOrSeveralSendingHlrLookupRequest(serviceName, receivers, receiversDocumentUrl) {
        let url = `/sms/${serviceName}/hlr`;
        return this.client.request('POST', url, { receivers, receiversDocumentUrl });
    }
    /**
     * Home Location Register informations. Give informations about a given cellular phone. [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/hlr/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<SmsHlrLookupNumber> {
      let url = `/sms/${serviceName}/hlr/${id}`
  
      return this.client.request<SmsHlrLookupNumber>('GET', url)
    }
    */
    /**
     * Sms operator informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/hlr/%7Bid%7D/operator#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<SmsHlr> {
      let url = `/sms/${serviceName}/hlr/${id}/operator`
  
      return this.client.request<SmsHlr>('GET', url)
    }
    */
    /**
     * List the sms.Incoming objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/incoming#GET)
     */
    SmsReceivedAssociatedToTheSmsAccount(serviceName, creationDatetimeFrom, creationDatetimeTo, sender, tag) {
        let url = `/sms/${serviceName}/incoming?`;
        const queryParams = new query_params_1.default();
        if (creationDatetimeFrom) {
            queryParams.set('creationDatetime.from', creationDatetimeFrom.toString());
        }
        if (creationDatetimeTo) {
            queryParams.set('creationDatetime.to', creationDatetimeTo.toString());
        }
        if (sender) {
            queryParams.set('sender', sender);
        }
        if (tag) {
            queryParams.set('tag', tag);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Sms history of sms incoming received [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/incoming/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<SmsIncoming> {
      let url = `/sms/${serviceName}/incoming/${id}`
  
      return this.client.request<SmsIncoming>('GET', url)
    }
    */
    /**
     * Sms history of sms incoming received [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/incoming/%7Bid%7D#DELETE)
     */
    DeleteTheSmsIncomingHistoryGiven(id, serviceName) {
        let url = `/sms/${serviceName}/incoming/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the sms.Job objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/jobs#GET)
     */
    SmsInPendingAssociatedToTheSmsAccount(serviceName) {
        let url = `/sms/${serviceName}/jobs`;
        return this.client.request('GET', url);
    }
    Promise() {
        let url = `/sms/${serviceName}/jobs`;
        return this.client.request('POST', url, { message, charset, class: , coding, differedPeriod, noStopClause, priority, receivers, receiversDocumentUrl, receiversSlotId, sender, senderForResponse, tag, validityPeriod });
    }
    /**
     * Sms job [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/jobs/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<SmsJob> {
      let url = `/sms/${serviceName}/jobs/${id}`
  
      return this.client.request<SmsJob>('GET', url)
    }
    */
    /**
     * Sms job [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/jobs/%7Bid%7D#DELETE)
     */
    DeleteTheSmsJobGivenStopSending(id, serviceName) {
        let url = `/sms/${serviceName}/jobs/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the sms.Outgoing objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/outgoing#GET)
     */
    SmsSentAssociatedToTheSmsAccount(serviceName, creationDatetimeFrom, creationDatetimeTo, deliveryReceipt, differedDelivery, ptt, receiver, sender, tag) {
        let url = `/sms/${serviceName}/outgoing?`;
        const queryParams = new query_params_1.default();
        if (creationDatetimeFrom) {
            queryParams.set('creationDatetime.from', creationDatetimeFrom.toString());
        }
        if (creationDatetimeTo) {
            queryParams.set('creationDatetime.to', creationDatetimeTo.toString());
        }
        if (deliveryReceipt) {
            queryParams.set('deliveryReceipt', deliveryReceipt.toString());
        }
        if (differedDelivery) {
            queryParams.set('differedDelivery', differedDelivery.toString());
        }
        if (ptt) {
            queryParams.set('ptt', ptt.toString());
        }
        if (receiver) {
            queryParams.set('receiver', receiver);
        }
        if (sender) {
            queryParams.set('sender', sender);
        }
        if (tag) {
            queryParams.set('tag', tag);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Sms history of sms outgoing sent [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/outgoing/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<SmsOutgoing> {
      let url = `/sms/${serviceName}/outgoing/${id}`
  
      return this.client.request<SmsOutgoing>('GET', url)
    }
    */
    /**
     * Sms history of sms outgoing sent [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/outgoing/%7Bid%7D#DELETE)
     */
    DeleteTheSmsOutgoingHistoryGiven(id, serviceName) {
        let url = `/sms/${serviceName}/outgoing/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * Sms operator informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/outgoing/%7Bid%7D/hlr#GET)
     */
    /*
    GetThisObjectProperties(id: number, serviceName: string): Promise<SmsHlr> {
      let url = `/sms/${serviceName}/outgoing/${id}/hlr`
  
      return this.client.request<SmsHlr>('GET', url)
    }
    */
    /**
     * List the sms.Phonebook objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks#GET)
     */
    ReturnPhonebooksAssociatedToThisAccount(serviceName) {
        let url = `/sms/${serviceName}/phonebooks`;
        return this.client.request('GET', url);
    }
    /**
     * List the sms.Phonebook objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks#POST)
     */
    AddAPhonebookReturnTheBookKey(name, serviceName) {
        let url = `/sms/${serviceName}/phonebooks`;
        return this.client.request('POST', url, { name });
    }
    /**
     * Phone book [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D#GET)
     */
    /*
    GetThisObjectProperties(bookKey: string, serviceName: string): Promise<SmsPhonebook> {
      let url = `/sms/${serviceName}/phonebooks/${bookKey}`
  
      return this.client.request<SmsPhonebook>('GET', url)
    }
    */
    /**
     * Phone book [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D#PUT)
     */
    /*
    AlterThisObjectProperties(bookKey: string, serviceName: string, payload: SmsPhonebook): Promise<void> {
      let url = `/sms/${serviceName}/phonebooks/${bookKey}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Phone book [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D#DELETE)
     */
    DeleteAPhonebook(bookKey, serviceName) {
        let url = `/sms/${serviceName}/phonebooks/${bookKey}`;
        return this.client.request('DELETE', url);
    }
    /**
     * export operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/export#GET)
     */
    ExportThePhonebookContacts(bookKey, format, serviceName) {
        let url = `/sms/${serviceName}/phonebooks/${bookKey}/export?`;
        const queryParams = new query_params_1.default();
        if (format) {
            queryParams.set('format', format.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * import operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/import#POST)
     */
    ImportAContactsFileSupportedFormatsAreExcelXlsAndXlsxAndCSV(bookKey, documentId, serviceName) {
        let url = `/sms/${serviceName}/phonebooks/${bookKey}/import`;
        return this.client.request('POST', url, { documentId });
    }
    /**
     * List the sms.PhonebookContact objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact#GET)
     */
    PhonebookContacts(bookKey, serviceName) {
        let url = `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact`;
        return this.client.request('GET', url);
    }
    /**
     * List the sms.PhonebookContact objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact#POST)
     */
    CreateAPhonebookContactReturnIdentifierOfThePhonebookContact(bookKey, group, name, serviceName, surname, homeMobile, homePhone, workMobile, workPhone) {
        let url = `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact`;
        return this.client.request('POST', url, { group, name, surname, homeMobile, homePhone, workMobile, workPhone });
    }
    /**
     * Phone book contact [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(bookKey: string, id: number, serviceName: string): Promise<SmsPhonebookContact> {
      let url = `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact/${id}`
  
      return this.client.request<SmsPhonebookContact>('GET', url)
    }
    */
    /**
     * Phone book contact [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact/%7Bid%7D#PUT)
     */
    /*
    AlterThisObjectProperties(bookKey: string, id: number, serviceName: string, payload: SmsPhonebookContact): Promise<void> {
      let url = `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact/${id}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Phone book contact [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/phonebooks/%7BbookKey%7D/phonebookContact/%7Bid%7D#DELETE)
     */
    DeleteAPhonebookContact(bookKey, id, serviceName) {
        let url = `/sms/${serviceName}/phonebooks/${bookKey}/phonebookContact/${id}`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the sms.Receiver objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers#GET)
     */
    ReceiversPreloadedFromTextOrCsvDocumentFile(serviceName) {
        let url = `/sms/${serviceName}/receivers`;
        return this.client.request('GET', url);
    }
    /**
     * List the sms.Receiver objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers#POST)
     */
    AddANewDocumentOfCsvReceivers(autoUpdate, description, serviceName, slotId, csvUrl, documentId) {
        let url = `/sms/${serviceName}/receivers`;
        return this.client.request('POST', url, { autoUpdate, description, slotId, csvUrl, documentId });
    }
    /**
     * Sms receivers preloaded [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, slotId: number): Promise<SmsReceiver> {
      let url = `/sms/${serviceName}/receivers/${slotId}`
  
      return this.client.request<SmsReceiver>('GET', url)
    }
    */
    /**
     * Sms receivers preloaded [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, slotId: number, payload: SmsReceiver): Promise<void> {
      let url = `/sms/${serviceName}/receivers/${slotId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Sms receivers preloaded [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D#DELETE)
     */
    DeleteTheDocumentFromTheSlot(serviceName, slotId) {
        let url = `/sms/${serviceName}/receivers/${slotId}`;
        return this.client.request('DELETE', url);
    }
    /**
     * clean operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D/clean#POST)
     */
    CleanTheInvalidAndInactiveReceiversInTheDocumentByRequestingHLROnEachReceiverAReportIsSentByEmailAtTheEndOfTheOperation(freemium, priceOnly, serviceName, slotId) {
        let url = `/sms/${serviceName}/receivers/${slotId}/clean`;
        return this.client.request('POST', url, { freemium, priceOnly });
    }
    /**
     * csv operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/receivers/%7BslotId%7D/csv#GET)
     */
    GetTheDocumentDataContainer(serviceName, slotId) {
        let url = `/sms/${serviceName}/receivers/${slotId}/csv`;
        return this.client.request('GET', url);
    }
    /**
     * seeOffers operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/seeOffers#GET)
     */
    DescribeSMSOffersAvailable(countryCurrencyPrice, countryDestination, quantity, serviceName) {
        let url = `/sms/${serviceName}/seeOffers?`;
        const queryParams = new query_params_1.default();
        if (countryCurrencyPrice) {
            queryParams.set('countryCurrencyPrice', countryCurrencyPrice.toString());
        }
        if (countryDestination) {
            queryParams.set('countryDestination', countryDestination.toString());
        }
        if (quantity) {
            queryParams.set('quantity', quantity.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * List the sms.Sender objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders#GET)
     */
    SendersAllowedAssociatedToTheSmsAccount(serviceName) {
        let url = `/sms/${serviceName}/senders`;
        return this.client.request('GET', url);
    }
    /**
     * List the sms.Sender objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders#POST)
     */
    CreateTheSmsSenderGiven(sender, serviceName, description, reason) {
        let url = `/sms/${serviceName}/senders`;
        return this.client.request('POST', url, { sender, description, reason });
    }
    /**
     * SMS senders [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders/%7Bsender%7D#GET)
     */
    /*
    GetThisObjectProperties(sender: string, serviceName: string): Promise<SmsSender> {
      let url = `/sms/${serviceName}/senders/${sender}`
  
      return this.client.request<SmsSender>('GET', url)
    }
    */
    /**
     * SMS senders [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders/%7Bsender%7D#PUT)
     */
    /*
    AlterThisObjectProperties(sender: string, serviceName: string, payload: SmsSender): Promise<void> {
      let url = `/sms/${serviceName}/senders/${sender}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * SMS senders [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders/%7Bsender%7D#DELETE)
     */
    DeleteTheSmsSenderGiven(sender, serviceName) {
        let url = `/sms/${serviceName}/senders/${sender}`;
        return this.client.request('DELETE', url);
    }
    /**
     * validate operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/senders/%7Bsender%7D/validate#POST)
     */
    ValidateAGivenSenderWithAnActivationCode(code, sender, serviceName) {
        let url = `/sms/${serviceName}/senders/${sender}/validate`;
        return this.client.request('POST', url, { code });
    }
    /**
     * sendersAvailableForValidation operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/sendersAvailableForValidation#GET)
     */
    TheSendersThatAreAttachedToYourPersonalInformationsOrOVHServicesAndThatCanBeAutomaticallyValidated(serviceName, referer) {
        let url = `/sms/${serviceName}/sendersAvailableForValidation?`;
        const queryParams = new query_params_1.default();
        if (referer) {
            queryParams.set('referer', referer.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/sms/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/sms/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * List the sms.Task objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/task#GET)
     */
    OperationsOnASMSService(serviceName, status) {
        let url = `/sms/${serviceName}/task?`;
        const queryParams = new query_params_1.default();
        if (status) {
            queryParams.set('status', status.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Operation on a SMS service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/task/%7BtaskId%7D#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string, taskId: number): Promise<SmsTask> {
      let url = `/sms/${serviceName}/task/${taskId}`
  
      return this.client.request<SmsTask>('GET', url)
    }
    */
    /**
     * List the sms.TemplateControl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl#GET)
     */
    TemplatePatternFilledUpForModerationNeededToSendInUSCountry(serviceName) {
        let url = `/sms/${serviceName}/templatesControl`;
        return this.client.request('GET', url);
    }
    /**
     * List the sms.TemplateControl objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl#POST)
     */
    CreateTheSmsTemplateControlGiven(activity, message, name, serviceName, description, reason) {
        let url = `/sms/${serviceName}/templatesControl`;
        return this.client.request('POST', url, { activity, message, name, description, reason });
    }
    /**
     * Sms template for moderation (Needed to send in US country) [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl/%7Bname%7D#GET)
     */
    /*
    GetThisObjectProperties(name: string, serviceName: string): Promise<SmsTemplateControl> {
      let url = `/sms/${serviceName}/templatesControl/${name}`
  
      return this.client.request<SmsTemplateControl>('GET', url)
    }
    */
    /**
     * Sms template for moderation (Needed to send in US country) [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl/%7Bname%7D#PUT)
     */
    /*
    AlterThisObjectProperties(name: string, serviceName: string, payload: SmsTemplateControl): Promise<void> {
      let url = `/sms/${serviceName}/templatesControl/${name}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Sms template for moderation (Needed to send in US country) [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl/%7Bname%7D#DELETE)
     */
    DeleteTheSmsTemplateControl(name, serviceName) {
        let url = `/sms/${serviceName}/templatesControl/${name}`;
        return this.client.request('DELETE', url);
    }
    /**
     * relaunchValidation operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/templatesControl/%7Bname%7D/relaunchValidation#POST)
     */
    AttemptANewValidationAfterModerationRefusal(description, message, name, serviceName) {
        let url = `/sms/${serviceName}/templatesControl/${name}/relaunchValidation`;
        return this.client.request('POST', url, { description, message });
    }
    /**
     * transferCredits operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/transferCredits#POST)
     */
    CreditTransferBetweenTwoSmsAccounts(credits, serviceName, smsAccountTarget) {
        let url = `/sms/${serviceName}/transferCredits`;
        return this.client.request('POST', url, { credits, smsAccountTarget });
    }
    /**
     * List the sms.User objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users#GET)
     */
    UsersAssociatedToTheSmsAccount(serviceName) {
        let url = `/sms/${serviceName}/users`;
        return this.client.request('GET', url);
    }
    /**
     * List the sms.User objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users#POST)
     */
    CreateANewUserForAnSmsAccount(login, password, serviceName) {
        let url = `/sms/${serviceName}/users`;
        return this.client.request('POST', url, { login, password });
    }
    /**
     * SMS users [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D#GET)
     */
    /*
    GetThisObjectProperties(login: string, serviceName: string): Promise<SmsUser> {
      let url = `/sms/${serviceName}/users/${login}`
  
      return this.client.request<SmsUser>('GET', url)
    }
    */
    /**
     * SMS users [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D#PUT)
     */
    /*
    AlterThisObjectProperties(login: string, serviceName: string, payload: SmsUser): Promise<void> {
      let url = `/sms/${serviceName}/users/${login}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * SMS users [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D#DELETE)
     */
    DeleteTheSmsUserGiven(login, serviceName) {
        let url = `/sms/${serviceName}/users/${login}`;
        return this.client.request('DELETE', url);
    }
    /**
     * document operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/document#GET)
     */
    /*
    GetTheMedocumentIdGenerated(login: string, serviceName: string, wayType: SmsDocumentWayType, creationDatetimeFrom?: string, creationDatetimeTo?: string, tag?: string): Promise<string> {
      let url = `/sms/${serviceName}/users/${login}/document?`
  
      const queryParams = new QueryParams()
      if (wayType) { queryParams.set('wayType', wayType.toString()) }
      if (creationDatetimeFrom) { queryParams.set('creationDatetime.from', creationDatetimeFrom.toString()) }
      if (creationDatetimeTo) { queryParams.set('creationDatetime.to', creationDatetimeTo.toString()) }
      if (tag) { queryParams.set('tag', tag) }
  
      return this.client.request<string>('GET', url+queryParams.toString())
    }
    */
    /**
     * List the sms.Incoming objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/incoming#GET)
     */
    SmsReceivedAssociatedToTheSmsUser(login, serviceName, sender, tag) {
        let url = `/sms/${serviceName}/users/${login}/incoming?`;
        const queryParams = new query_params_1.default();
        if (sender) {
            queryParams.set('sender', sender);
        }
        if (tag) {
            queryParams.set('tag', tag);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Sms history of sms incoming received [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/incoming/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, login: string, serviceName: string): Promise<SmsIncoming> {
      let url = `/sms/${serviceName}/users/${login}/incoming/${id}`
  
      return this.client.request<SmsIncoming>('GET', url)
    }
    */
    /**
     * Sms history of sms incoming received [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/incoming/%7Bid%7D#DELETE)
     */
    /*
    DeleteTheSmsIncomingHistoryGiven(id: number, login: string, serviceName: string): Promise<void> {
      let url = `/sms/${serviceName}/users/${login}/incoming/${id}`
  
      return this.client.request<void>('DELETE', url)
    }
    */
    /**
     * List the sms.Job objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/jobs#GET)
     */
    SmsInPendingAssociatedToTheSmsUser(login, serviceName) {
        let url = `/sms/${serviceName}/users/${login}/jobs`;
        return this.client.request('GET', url);
    }
    /**
     * List the sms.Job objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/jobs#POST)
     */
    /*
    AddOneOrSeveralSendingJobs(login: string, message: string, serviceName: string, charset?: SmsCharset, class?: SmsClass, coding?: SmsCoding, differedPeriod?: number, noStopClause?: boolean, priority?: SmsPriority, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, sender?: string, senderForResponse?: boolean, tag?: string, validityPeriod?: number): Promise<SmsSmsSendingReport> {
      let url = `/sms/${serviceName}/users/${login}/jobs`
  
      return this.client.request<SmsSmsSendingReport>('POST', url, {message, charset, class, coding, differedPeriod, noStopClause, priority, receivers, receiversDocumentUrl, receiversSlotId, sender, senderForResponse, tag, validityPeriod})
    }
    */
    /**
     * Sms job [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/jobs/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, login: string, serviceName: string): Promise<SmsJob> {
      let url = `/sms/${serviceName}/users/${login}/jobs/${id}`
  
      return this.client.request<SmsJob>('GET', url)
    }
    */
    /**
     * Sms job [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/jobs/%7Bid%7D#DELETE)
     */
    /*
    DeleteTheSmsJobGivenStopSending(id: number, login: string, serviceName: string): Promise<void> {
      let url = `/sms/${serviceName}/users/${login}/jobs/${id}`
  
      return this.client.request<void>('DELETE', url)
    }
    */
    /**
     * List the sms.Outgoing objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/outgoing#GET)
     */
    SmsSentAssociatedToTheSmsUser(login, serviceName, deliveryReceipt, differedDelivery, ptt, receiver, sender, tag) {
        let url = `/sms/${serviceName}/users/${login}/outgoing?`;
        const queryParams = new query_params_1.default();
        if (deliveryReceipt) {
            queryParams.set('deliveryReceipt', deliveryReceipt.toString());
        }
        if (differedDelivery) {
            queryParams.set('differedDelivery', differedDelivery.toString());
        }
        if (ptt) {
            queryParams.set('ptt', ptt.toString());
        }
        if (receiver) {
            queryParams.set('receiver', receiver);
        }
        if (sender) {
            queryParams.set('sender', sender);
        }
        if (tag) {
            queryParams.set('tag', tag);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Sms history of sms outgoing sent [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/outgoing/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, login: string, serviceName: string): Promise<SmsOutgoing> {
      let url = `/sms/${serviceName}/users/${login}/outgoing/${id}`
  
      return this.client.request<SmsOutgoing>('GET', url)
    }
    */
    /**
     * Sms history of sms outgoing sent [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/outgoing/%7Bid%7D#DELETE)
     */
    /*
    DeleteTheSmsOutgoingHistoryGiven(id: number, login: string, serviceName: string): Promise<void> {
      let url = `/sms/${serviceName}/users/${login}/outgoing/${id}`
  
      return this.client.request<void>('DELETE', url)
    }
    */
    /**
     * Sms operator informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/outgoing/%7Bid%7D/hlr#GET)
     */
    /*
    GetThisObjectProperties(id: number, login: string, serviceName: string): Promise<SmsHlr> {
      let url = `/sms/${serviceName}/users/${login}/outgoing/${id}/hlr`
  
      return this.client.request<SmsHlr>('GET', url)
    }
    */
    /**
     * List the sms.Receiver objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers#GET)
     */
    /*
    ReceiversPreloadedFromTextOrCsvDocumentFile(login: string, serviceName: string): Promise<number[]> {
      let url = `/sms/${serviceName}/users/${login}/receivers`
  
      return this.client.request<number[]>('GET', url)
    }
    */
    /**
     * List the sms.Receiver objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers#POST)
     */
    /*
    AddANewDocumentOfCsvReceivers(autoUpdate: boolean, description: string, login: string, serviceName: string, slotId: number, csvUrl?: string, documentId?: string): Promise<SmsReceiver> {
      let url = `/sms/${serviceName}/users/${login}/receivers`
  
      return this.client.request<SmsReceiver>('POST', url, {autoUpdate, description, slotId, csvUrl, documentId})
    }
    */
    /**
     * Sms receivers preloaded [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D#GET)
     */
    /*
    GetThisObjectProperties(login: string, serviceName: string, slotId: number): Promise<SmsReceiver> {
      let url = `/sms/${serviceName}/users/${login}/receivers/${slotId}`
  
      return this.client.request<SmsReceiver>('GET', url)
    }
    */
    /**
     * Sms receivers preloaded [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D#PUT)
     */
    /*
    AlterThisObjectProperties(login: string, serviceName: string, slotId: number, payload: SmsReceiver): Promise<void> {
      let url = `/sms/${serviceName}/users/${login}/receivers/${slotId}`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Sms receivers preloaded [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D#DELETE)
     */
    /*
    DeleteTheDocumentFromTheSlot(login: string, serviceName: string, slotId: number): Promise<void> {
      let url = `/sms/${serviceName}/users/${login}/receivers/${slotId}`
  
      return this.client.request<void>('DELETE', url)
    }
    */
    /**
     * clean operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D/clean#POST)
     */
    /*
    CleanTheInvalidAndInactiveReceiversInTheDocumentByRequestingHLROnEachReceiverAReportIsSentByEmailAtTheEndOfTheOperation(freemium: boolean, login: string, priceOnly: boolean, serviceName: string, slotId: number): Promise<SmsReceiversAsynchronousCleanReport> {
      let url = `/sms/${serviceName}/users/${login}/receivers/${slotId}/clean`
  
      return this.client.request<SmsReceiversAsynchronousCleanReport>('POST', url, {freemium, priceOnly})
    }
    */
    /**
     * csv operations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/users/%7Blogin%7D/receivers/%7BslotId%7D/csv#GET)
     */
    /*
    GetTheDocumentDataContainer(login: string, serviceName: string, slotId: number): Promise<string> {
      let url = `/sms/${serviceName}/users/${login}/receivers/${slotId}/csv`
  
      return this.client.request<string>('GET', url)
    }
    */
    /**
     * List the sms.VirtualNumber objects [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers#GET)
     */
    VirtualNumbersAssociatedToTheSmsAccount(serviceName) {
        let url = `/sms/${serviceName}/virtualNumbers`;
        return this.client.request('GET', url);
    }
    /**
     * Virtual numbers [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D#GET)
     */
    /*
    GetThisObjectProperties(number: string, serviceName: string): Promise<SmsVirtualNumber> {
      let url = `/sms/${serviceName}/virtualNumbers/${number}`
  
      return this.client.request<SmsVirtualNumber>('GET', url)
    }
    */
    /**
     * The web access for your virtual number chat application [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/chatAccess#GET)
     */
    /*
    GetThisObjectProperties(number: string, serviceName: string): Promise<SmsChatAccess> {
      let url = `/sms/${serviceName}/virtualNumbers/${number}/chatAccess`
  
      return this.client.request<SmsChatAccess>('GET', url)
    }
    */
    /**
     * The web access for your virtual number chat application [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/chatAccess#POST)
     */
    CreateANewWebAccessForThisRessource(number, serviceName) {
        let url = `/sms/${serviceName}/virtualNumbers/${number}/chatAccess`;
        return this.client.request('POST', url);
    }
    /**
     * The web access for your virtual number chat application [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/chatAccess#DELETE)
     */
    DeleteTheGivenWebAccess(number, serviceName) {
        let url = `/sms/${serviceName}/virtualNumbers/${number}/chatAccess`;
        return this.client.request('DELETE', url);
    }
    /**
     * List the sms.Incoming objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/incoming#GET)
     */
    /*
    SmsReceivedAssociatedToTheSmsAccount(number: string, serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, sender?: string, tag?: string): Promise<number[]> {
      let url = `/sms/${serviceName}/virtualNumbers/${number}/incoming?`
  
      const queryParams = new QueryParams()
      if (creationDatetimeFrom) { queryParams.set('creationDatetime.from', creationDatetimeFrom.toString()) }
      if (creationDatetimeTo) { queryParams.set('creationDatetime.to', creationDatetimeTo.toString()) }
      if (sender) { queryParams.set('sender', sender) }
      if (tag) { queryParams.set('tag', tag) }
  
      return this.client.request<number[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Sms history of sms incoming received [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/incoming/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, number: string, serviceName: string): Promise<SmsIncoming> {
      let url = `/sms/${serviceName}/virtualNumbers/${number}/incoming/${id}`
  
      return this.client.request<SmsIncoming>('GET', url)
    }
    */
    /**
     * Sms history of sms incoming received [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/incoming/%7Bid%7D#DELETE)
     */
    /*
    DeleteTheSmsIncomingHistoryGiven(id: number, number: string, serviceName: string): Promise<void> {
      let url = `/sms/${serviceName}/virtualNumbers/${number}/incoming/${id}`
  
      return this.client.request<void>('DELETE', url)
    }
    */
    /**
     * List the sms.VirtualNumberJob objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/jobs#GET)
     */
    /*
    SmsInPendingAssociatedToTheSmsAccount(number: string, serviceName: string): Promise<number[]> {
      let url = `/sms/${serviceName}/virtualNumbers/${number}/jobs`
  
      return this.client.request<number[]>('GET', url)
    }
    */
    /**
     * List the sms.VirtualNumberJob objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/jobs#POST)
     */
    /*
    AddOneOrSeveralSendingJobs(message: string, number: string, serviceName: string, charset?: SmsCharset, class?: SmsClass, coding?: SmsCoding, differedPeriod?: number, priority?: SmsPriority, receivers?: string[], receiversDocumentUrl?: string, receiversSlotId?: string, tag?: string, validityPeriod?: number): Promise<SmsSmsSendingReport> {
      let url = `/sms/${serviceName}/virtualNumbers/${number}/jobs`
  
      return this.client.request<SmsSmsSendingReport>('POST', url, {message, charset, class, coding, differedPeriod, priority, receivers, receiversDocumentUrl, receiversSlotId, tag, validityPeriod})
    }
    */
    /**
     * Sms job [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/jobs/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, number: string, serviceName: string): Promise<SmsVirtualNumberJob> {
      let url = `/sms/${serviceName}/virtualNumbers/${number}/jobs/${id}`
  
      return this.client.request<SmsVirtualNumberJob>('GET', url)
    }
    */
    /**
     * Sms job [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/jobs/%7Bid%7D#DELETE)
     */
    /*
    DeleteTheSmsJobGivenStopSending(id: number, number: string, serviceName: string): Promise<void> {
      let url = `/sms/${serviceName}/virtualNumbers/${number}/jobs/${id}`
  
      return this.client.request<void>('DELETE', url)
    }
    */
    /**
     * List the sms.Outgoing objects [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/outgoing#GET)
     */
    /*
    SmsSentAssociatedToTheSmsAccount(number: string, serviceName: string, creationDatetimeFrom?: string, creationDatetimeTo?: string, deliveryReceipt?: number, differedDelivery?: number, ptt?: number, receiver?: string, sender?: string, tag?: string): Promise<number[]> {
      let url = `/sms/${serviceName}/virtualNumbers/${number}/outgoing?`
  
      const queryParams = new QueryParams()
      if (creationDatetimeFrom) { queryParams.set('creationDatetime.from', creationDatetimeFrom.toString()) }
      if (creationDatetimeTo) { queryParams.set('creationDatetime.to', creationDatetimeTo.toString()) }
      if (deliveryReceipt) { queryParams.set('deliveryReceipt', deliveryReceipt.toString()) }
      if (differedDelivery) { queryParams.set('differedDelivery', differedDelivery.toString()) }
      if (ptt) { queryParams.set('ptt', ptt.toString()) }
      if (receiver) { queryParams.set('receiver', receiver) }
      if (sender) { queryParams.set('sender', sender) }
      if (tag) { queryParams.set('tag', tag) }
  
      return this.client.request<number[]>('GET', url+queryParams.toString())
    }
    */
    /**
     * Sms history of sms outgoing sent [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/outgoing/%7Bid%7D#GET)
     */
    /*
    GetThisObjectProperties(id: number, number: string, serviceName: string): Promise<SmsOutgoing> {
      let url = `/sms/${serviceName}/virtualNumbers/${number}/outgoing/${id}`
  
      return this.client.request<SmsOutgoing>('GET', url)
    }
    */
    /**
     * Sms history of sms outgoing sent [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/outgoing/%7Bid%7D#DELETE)
     */
    /*
    DeleteTheSmsOutgoingHistoryGiven(id: number, number: string, serviceName: string): Promise<void> {
      let url = `/sms/${serviceName}/virtualNumbers/${number}/outgoing/${id}`
  
      return this.client.request<void>('DELETE', url)
    }
    */
    /**
     * Sms operator informations [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/%7BserviceName%7D/virtualNumbers/%7Bnumber%7D/outgoing/%7Bid%7D/hlr#GET)
     */
    /*
    GetThisObjectProperties(id: number, number: string, serviceName: string): Promise<SmsHlr> {
      let url = `/sms/${serviceName}/virtualNumbers/${number}/outgoing/${id}/hlr`
  
      return this.client.request<SmsHlr>('GET', url)
    }
    */
    /**
     * Get informations about the given ptt code [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/sms/ptts#GET)
     */
    GetInformationsAboutTheGivenPttCode(ptt) {
        let url = `/sms/ptts?`;
        const queryParams = new query_params_1.default();
        if (ptt) {
            queryParams.set('ptt', ptt.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.Sms = Sms;
//# sourceMappingURL=sms.js.map