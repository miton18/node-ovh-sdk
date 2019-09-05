"use strict";
// GENERATED SDK for hosting/reseller API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Reseller type
 */
var HostingresellerresellerType;
(function (HostingresellerresellerType) {
    HostingresellerresellerType["TYPE1"] = "TYPE1";
    HostingresellerresellerType["TYPE2"] = "TYPE2";
    HostingresellerresellerType["TYPE3"] = "TYPE3";
    HostingresellerresellerType["TYPE4"] = "TYPE4";
    HostingresellerresellerType["TYPE5"] = "TYPE5";
})(HostingresellerresellerType = exports.HostingresellerresellerType || (exports.HostingresellerresellerType = {}));
/*
 * Possible values for language type
 */
var ResellerpleskLanguageType;
(function (ResellerpleskLanguageType) {
    ResellerpleskLanguageType["AR"] = "ar";
    ResellerpleskLanguageType["ZH_CN"] = "zh-CN";
    ResellerpleskLanguageType["ZH_TW"] = "zh-TW";
    ResellerpleskLanguageType["CS_CZ"] = "cs-CZ";
    ResellerpleskLanguageType["DA_DK"] = "da-DK";
    ResellerpleskLanguageType["NL_NL"] = "nl-NL";
    ResellerpleskLanguageType["EN_US"] = "en-US";
    ResellerpleskLanguageType["FI_FI"] = "fi-FI";
    ResellerpleskLanguageType["FR_FR"] = "fr-FR";
    ResellerpleskLanguageType["DE_DE"] = "de-DE";
    ResellerpleskLanguageType["EL_GR"] = "el-GR";
    ResellerpleskLanguageType["HE_IL"] = "he-IL";
    ResellerpleskLanguageType["HU_HU"] = "hu-HU";
    ResellerpleskLanguageType["ID_ID"] = "id-ID";
    ResellerpleskLanguageType["IT_IT"] = "it-IT";
    ResellerpleskLanguageType["JA_JP"] = "ja-JP";
    ResellerpleskLanguageType["KO_KR"] = "ko-KR";
    ResellerpleskLanguageType["MS_MY"] = "ms-MY";
    ResellerpleskLanguageType["NB_NO"] = "nb-NO";
    ResellerpleskLanguageType["PL_PL"] = "pl-PL";
    ResellerpleskLanguageType["PT_BR"] = "pt-BR";
    ResellerpleskLanguageType["PT_PT"] = "pt-PT";
    ResellerpleskLanguageType["RO_RO"] = "ro-RO";
    ResellerpleskLanguageType["RU_RU"] = "ru-RU";
    ResellerpleskLanguageType["ES_ES"] = "es-ES";
    ResellerpleskLanguageType["SV_SE"] = "sv-SE";
    ResellerpleskLanguageType["TL_PH"] = "tl-PH";
    ResellerpleskLanguageType["TH_TH"] = "th-TH";
    ResellerpleskLanguageType["TR_TR"] = "tr-TR";
    ResellerpleskLanguageType["UK_UA"] = "uk-UA";
    ResellerpleskLanguageType["VI_VN"] = "vi-VN";
})(ResellerpleskLanguageType = exports.ResellerpleskLanguageType || (exports.ResellerpleskLanguageType = {}));
/*
 * Possible values for snapshot type
 */
var ResellersnapshotType;
(function (ResellersnapshotType) {
    ResellersnapshotType["AUTOMATIC"] = "automatic";
    ResellersnapshotType["MANUAL"] = "manual";
})(ResellersnapshotType = exports.ResellersnapshotType || (exports.ResellersnapshotType = {}));
/*
 * Possible values for task status
 */
var ResellertaskType;
(function (ResellertaskType) {
    ResellertaskType["DONE"] = "done";
    ResellertaskType["ERROR"] = "error";
    ResellertaskType["DOING"] = "doing";
    ResellertaskType["TODO"] = "todo";
    ResellertaskType["UNKNOWN"] = "unknown";
})(ResellertaskType = exports.ResellertaskType || (exports.ResellertaskType = {}));
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
class HostingReseller {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the HOSTING_RESELLER service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller#GET)
     */
    ListAvailableServices() {
        let url = `/hosting/reseller`;
        return this.client.request('GET', url);
    }
    /**
     * Reseller [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/hosting/reseller/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName, contactAdmin, contactBilling, contactTech) {
        let url = `/hosting/reseller/${serviceName}/changeContact`;
        return this.client.request('POST', url, { contactAdmin, contactBilling, contactTech });
    }
    /**
     * Reseller.change_email [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/email#POST)
     */
    ChangeUserEmail(email, serviceName) {
        let url = `/hosting/reseller/${serviceName}/email`;
        return this.client.request('POST', url, { email });
    }
    /**
     * Reseller.change_language [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/language#POST)
     */
    ChangeLanguageOfThePleskInstance(language, serviceName) {
        let url = `/hosting/reseller/${serviceName}/language`;
        return this.client.request('POST', url, { language });
    }
    /**
     * Reseller.reboot [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/reboot#POST)
     */
    RestartInstance(serviceName, hard) {
        let url = `/hosting/reseller/${serviceName}/reboot?`;
        const queryParams = new query_params_1.default();
        if (hard) {
            queryParams.set('hard', hard.toString());
        }
        return this.client.request('POST', url + queryParams.toString());
    }
    /**
     * Reseller.reinstall [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/reinstall#POST)
     */
    ReinstallInstance(serviceName) {
        let url = `/hosting/reseller/${serviceName}/reinstall`;
        return this.client.request('POST', url);
    }
    /**
     * Reseller.resetPassword [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/resetPasswordUrl#GET)
     */
    GetResetInstancePasswordUrl(serviceName) {
        let url = `/hosting/reseller/${serviceName}/resetPasswordUrl`;
        return this.client.request('GET', url);
    }
    /**
     * Reseller.set_reverse [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/reverse#POST)
     */
    SetNewReverseToIp(reverse, serviceName) {
        let url = `/hosting/reseller/${serviceName}/reverse`;
        return this.client.request('POST', url, { reverse });
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/hosting/reseller/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/hosting/reseller/${serviceName}/serviceInfos`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * Reseller.list_snapshot [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/snapshot#GET)
     */
    ListInstanceCurrentSnapshots(serviceName) {
        let url = `/hosting/reseller/${serviceName}/snapshot`;
        return this.client.request('GET', url);
    }
    /**
     * Reseller.list_snapshot [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/snapshot#POST)
     */
    MakeManualSnapshot(serviceName) {
        let url = `/hosting/reseller/${serviceName}/snapshot`;
        return this.client.request('POST', url);
    }
    /**
     * Reseller.get_snapshot [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/snapshot/%7BsnapshotId%7D#GET)
     */
    DetailOfASnapshot(serviceName, snapshotId) {
        let url = `/hosting/reseller/${serviceName}/snapshot/${snapshotId}`;
        return this.client.request('GET', url);
    }
    /**
     * Reseller.restore_snapshot [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/snapshot/%7BsnapshotId%7D/restore#POST)
     */
    RestoreASnapshot(serviceName, snapshotId) {
        let url = `/hosting/reseller/${serviceName}/snapshot/${snapshotId}/restore`;
        return this.client.request('POST', url);
    }
    /**
     * Reseller.list_task [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/task#GET)
     */
    GetListOfTasks(serviceName) {
        let url = `/hosting/reseller/${serviceName}/task`;
        return this.client.request('GET', url);
    }
    /**
     * Reseller.get_task [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/hosting/reseller/%7BserviceName%7D/task/%7BtaskId%7D#GET)
     */
    GetTaskInformationGivenItsId(serviceName, taskId) {
        let url = `/hosting/reseller/${serviceName}/task/${taskId}`;
        return this.client.request('GET', url);
    }
}
exports.HostingReseller = HostingReseller;
//# sourceMappingURL=hosting.reseller.js.map