import { Client } from '../client';
/**
 * Return credit balance informations structure
 */
export interface FreefaxBalanceInformations {
    faxs: number;
    points: number;
}
/**
 * Freefax properties
 */
export interface FreefaxFreefaxProperties {
    faxMaxCall: TelephonyFaxSendingTries;
    faxQuality: TelephonyFaxQuality;
    faxTagLine: string;
    fromEmail: string;
    fromName: string;
    number: any;
    redirectionEmail: string[];
}
export declare enum ServiceRenewalType {
    AUTOMATICFORCEDPRODUCT = "automaticForcedProduct",
    AUTOMATICV2012 = "automaticV2012",
    AUTOMATICV2014 = "automaticV2014",
    AUTOMATICV2016 = "automaticV2016",
    MANUAL = "manual",
    ONESHOT = "oneShot",
    OPTION = "option"
}
/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
    automatic: boolean;
    deleteAtExpiration: boolean;
    forced: boolean;
    manualPayment?: boolean;
    period?: number;
}
export declare enum ServiceState {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
/**
 * Details about a Service
 */
export interface ServicesService {
    canDeleteAtExpiration: boolean;
    contactAdmin: string;
    contactBilling: string;
    contactTech: string;
    creation: string;
    domain: string;
    engagedUpTo?: string;
    expiration: string;
    possibleRenewPeriod?: number[];
    renew?: ServiceRenewType;
    renewalType: ServiceRenewalType;
    serviceId: number;
    status: ServiceState;
}
export declare enum TelephonyFaxQuality {
    BEST = "best",
    HIGH = "high",
    NORMAL = "normal"
}
export declare type TelephonyFaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export declare enum TelephonyServiceVoicemailAudioFormat {
    AIFF = "aiff",
    AU = "au",
    FLAC = "flac",
    MP3 = "mp3",
    OGG = "ogg",
    WAV = "wav"
}
export declare enum TelephonyServiceVoicemailMailOption {
    ATTACHMENT = "attachment",
    SIMPLE = "simple"
}
/**
 * Voicemail configuration
 */
export interface TelephonyServiceVoicemailNotifications {
    email: string;
    type: TelephonyServiceVoicemailMailOption;
}
export declare enum TelephonyVoicefaxRouting {
    FAX = "fax",
    VOICEMAIL = "voicemail"
}
export declare enum TelephonyVoicemailGreeting {
    DEFAULT = "default",
    FULL = "full",
    SHORT = "short"
}
/**
 * Internal and external numbers for voicemail service
 */
export interface TelephonyVoicemailNumbers {
    external: string;
    internal: string;
}
/**
 * Voicemail Properties
 */
export interface TelephonyVoicemailProperties {
    annouceMessage: string;
    audioFormat: TelephonyServiceVoicemailAudioFormat;
    doNotRecord: boolean;
    forcePassword: boolean;
    fromEmail: string;
    fromName: string;
    fullGreetingSoundId?: number;
    greetingType: TelephonyVoicemailGreeting;
    isNewVersion: boolean;
    keepMessage: boolean;
    redirectionEmails: TelephonyServiceVoicemailNotifications[];
    shortGreetingSoundId?: number;
    temporaryGreetingActivated: boolean;
    temporaryGreetingSoundId?: number;
    unreadMessages: number;
}
export declare class Freefax {
    private client;
    constructor(client: Client);
    /**
     * Operations about the VOIP service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Freefax properties [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<FreefaxFreefaxProperties>;
    /**
     * Freefax properties [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: FreefaxFreefaxProperties): Promise<void>;
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/changePassword#POST)
     */
    GeneratesANewPasswordForYourFaxAccount(serviceName: string): Promise<string>;
    /**
     * mainService operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/mainService#GET)
     */
    MainServiceAttachedToFreefax(serviceName: string): Promise<string>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/serviceInfos#PUT)
     */
    /**
     * Voicemail Properties [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail#GET)
     */
    /**
     * Voicemail Properties [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail#PUT)
     */
    /**
     * changePassword operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail/changePassword#POST)
     */
    ChangeTheVoicemailPasswordItMustBe4Digit(password: string, serviceName: string): Promise<void>;
    /**
     * changeRouting operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail/changeRouting#POST)
     */
    DisableEnableVoicemailAvailableOnlyIfTheLineHasFaxCapabilities(routing: TelephonyVoicefaxRouting, serviceName: string): Promise<void>;
    /**
     * routing operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail/routing#GET)
     */
    GetTheStatusOfTheVoicemailAvailableOnlyIfTheLineHasFaxCapabilities(serviceName: string): Promise<TelephonyVoicefaxRouting>;
    /**
     * voicemailNumbers operations [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail/voicemailNumbers#GET)
     */
    GetNumberForInternalAndExternalVoicemail(serviceName: string): Promise<TelephonyVoicemailNumbers>;
    /**
     * Get the credit balance and the remaining pages available for all our freefax [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/credits#GET)
     */
    GetTheCreditBalanceAndTheRemainingPagesAvailableForAllOurFreefax(): Promise<FreefaxBalanceInformations>;
}
//# sourceMappingURL=freefax.d.ts.map