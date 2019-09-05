"use strict";
// GENERATED SDK for freefax API
Object.defineProperty(exports, "__esModule", { value: true });
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
 * Available quality for fax documents
 */
var TelephonyFaxQuality;
(function (TelephonyFaxQuality) {
    TelephonyFaxQuality["BEST"] = "best";
    TelephonyFaxQuality["HIGH"] = "high";
    TelephonyFaxQuality["NORMAL"] = "normal";
})(TelephonyFaxQuality = exports.TelephonyFaxQuality || (exports.TelephonyFaxQuality = {}));
/*
 * Voicemail audio format
 */
var TelephonyServiceVoicemailAudioFormat;
(function (TelephonyServiceVoicemailAudioFormat) {
    TelephonyServiceVoicemailAudioFormat["AIFF"] = "aiff";
    TelephonyServiceVoicemailAudioFormat["AU"] = "au";
    TelephonyServiceVoicemailAudioFormat["FLAC"] = "flac";
    TelephonyServiceVoicemailAudioFormat["MP3"] = "mp3";
    TelephonyServiceVoicemailAudioFormat["OGG"] = "ogg";
    TelephonyServiceVoicemailAudioFormat["WAV"] = "wav";
})(TelephonyServiceVoicemailAudioFormat = exports.TelephonyServiceVoicemailAudioFormat || (exports.TelephonyServiceVoicemailAudioFormat = {}));
/*
 * Voicemail configuration
 */
var TelephonyServiceVoicemailMailOption;
(function (TelephonyServiceVoicemailMailOption) {
    TelephonyServiceVoicemailMailOption["ATTACHMENT"] = "attachment";
    TelephonyServiceVoicemailMailOption["SIMPLE"] = "simple";
})(TelephonyServiceVoicemailMailOption = exports.TelephonyServiceVoicemailMailOption || (exports.TelephonyServiceVoicemailMailOption = {}));
/*
 * All existing type of routing for a voicemail
 */
var TelephonyVoicefaxRouting;
(function (TelephonyVoicefaxRouting) {
    TelephonyVoicefaxRouting["FAX"] = "fax";
    TelephonyVoicefaxRouting["VOICEMAIL"] = "voicemail";
})(TelephonyVoicefaxRouting = exports.TelephonyVoicefaxRouting || (exports.TelephonyVoicefaxRouting = {}));
/*
 * Greeting type
 */
var TelephonyVoicemailGreeting;
(function (TelephonyVoicemailGreeting) {
    TelephonyVoicemailGreeting["DEFAULT"] = "default";
    TelephonyVoicemailGreeting["FULL"] = "full";
    TelephonyVoicemailGreeting["SHORT"] = "short";
})(TelephonyVoicemailGreeting = exports.TelephonyVoicemailGreeting || (exports.TelephonyVoicemailGreeting = {}));
class Freefax {
    constructor(client) {
        this.client = client;
    }
    /**
     * Operations about the VOIP service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax#GET)
     */
    ListAvailableServices() {
        let url = `/freefax`;
        return this.client.request('GET', url);
    }
    /**
     * Freefax properties [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName) {
        let url = `/freefax/${serviceName}`;
        return this.client.request('GET', url);
    }
    /**
     * Freefax properties [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName, payload) {
        let url = `/freefax/${serviceName}`;
        return this.client.request('PUT', url, payload);
    }
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/changePassword#POST)
     */
    GeneratesANewPasswordForYourFaxAccount(serviceName) {
        let url = `/freefax/${serviceName}/changePassword`;
        return this.client.request('POST', url);
    }
    /**
     * mainService operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/mainService#GET)
     */
    MainServiceAttachedToFreefax(serviceName) {
        let url = `/freefax/${serviceName}/mainService`;
        return this.client.request('GET', url);
    }
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/serviceInfos#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
      let url = `/freefax/${serviceName}/serviceInfos`
  
      return this.client.request<ServicesService>('GET', url)
    }
    */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/serviceInfos#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
      let url = `/freefax/${serviceName}/serviceInfos`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * Voicemail Properties [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail#GET)
     */
    /*
    GetThisObjectProperties(serviceName: string): Promise<TelephonyVoicemailProperties> {
      let url = `/freefax/${serviceName}/voicemail`
  
      return this.client.request<TelephonyVoicemailProperties>('GET', url)
    }
    */
    /**
     * Voicemail Properties [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail#PUT)
     */
    /*
    AlterThisObjectProperties(serviceName: string, payload: TelephonyVoicemailProperties): Promise<void> {
      let url = `/freefax/${serviceName}/voicemail`
  
      return this.client.request<void>('PUT', url, payload)
    }
    */
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail/changePassword#POST)
     */
    ChangeTheVoicemailPasswordItMustBe4Digit(password, serviceName) {
        let url = `/freefax/${serviceName}/voicemail/changePassword`;
        return this.client.request('POST', url, { password });
    }
    /**
     * changeRouting operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail/changeRouting#POST)
     */
    DisableEnableVoicemailAvailableOnlyIfTheLineHasFaxCapabilities(routing, serviceName) {
        let url = `/freefax/${serviceName}/voicemail/changeRouting`;
        return this.client.request('POST', url, { routing });
    }
    /**
     * routing operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail/routing#GET)
     */
    GetTheStatusOfTheVoicemailAvailableOnlyIfTheLineHasFaxCapabilities(serviceName) {
        let url = `/freefax/${serviceName}/voicemail/routing`;
        return this.client.request('GET', url);
    }
    /**
     * voicemailNumbers operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail/voicemailNumbers#GET)
     */
    GetNumberForInternalAndExternalVoicemail(serviceName) {
        let url = `/freefax/${serviceName}/voicemail/voicemailNumbers`;
        return this.client.request('GET', url);
    }
    /**
     * Get the credit balance and the remaining pages available for all our freefax [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/credits#GET)
     */
    GetTheCreditBalanceAndTheRemainingPagesAvailableForAllOurFreefax() {
        let url = `/freefax/credits`;
        return this.client.request('GET', url);
    }
}
exports.Freefax = Freefax;
//# sourceMappingURL=freefax.js.map