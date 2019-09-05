// GENERATED SDK for freefax API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Return credit balance informations structure
 */
export interface FreefaxBalanceInformations {
  faxs: number
  points: number
}

/**
 * Freefax properties
 */
export interface FreefaxFreefaxProperties {
  faxMaxCall: TelephonyFaxSendingTries
  faxQuality: TelephonyFaxQuality
  faxTagLine: string
  fromEmail: string
  fromName: string
  number: any
  redirectionEmail: string[]
}

/*
 * Detailed renewal type of a service
 */
export enum ServiceRenewalType {
  AUTOMATICFORCEDPRODUCT = 'automaticForcedProduct',
  AUTOMATICV2012 = 'automaticV2012',
  AUTOMATICV2014 = 'automaticV2014',
  AUTOMATICV2016 = 'automaticV2016',
  MANUAL = 'manual',
  ONESHOT = 'oneShot',
  OPTION = 'option'
}

/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  automatic: boolean
  deleteAtExpiration: boolean
  forced: boolean
  manualPayment?: boolean
  period?: number
}

/*
 * 
 */
export enum ServiceState {
  EXPIRED = 'expired',
  INCREATION = 'inCreation',
  OK = 'ok',
  PENDINGDEBT = 'pendingDebt',
  UNPAID = 'unPaid'
}

/**
 * Details about a Service
 */
export interface ServicesService {
  canDeleteAtExpiration: boolean
  contactAdmin: string
  contactBilling: string
  contactTech: string
  creation: string
  domain: string
  engagedUpTo?: string
  expiration: string
  possibleRenewPeriod?: number[]
  renew?: ServiceRenewType
  renewalType: ServiceRenewalType
  serviceId: number
  status: ServiceState
}

/*
 * Available quality for fax documents
 */
export enum TelephonyFaxQuality {
  BEST = 'best',
  HIGH = 'high',
  NORMAL = 'normal'
}

/*
 * Number of tries when sending a fax
 */
export type TelephonyFaxSendingTries = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/*
 * Voicemail audio format
 */
export enum TelephonyServiceVoicemailAudioFormat {
  AIFF = 'aiff',
  AU = 'au',
  FLAC = 'flac',
  MP3 = 'mp3',
  OGG = 'ogg',
  WAV = 'wav'
}

/*
 * Voicemail configuration
 */
export enum TelephonyServiceVoicemailMailOption {
  ATTACHMENT = 'attachment',
  SIMPLE = 'simple'
}

/**
 * Voicemail configuration
 */
export interface TelephonyServiceVoicemailNotifications {
  email: string
  type: TelephonyServiceVoicemailMailOption
}

/*
 * All existing type of routing for a voicemail
 */
export enum TelephonyVoicefaxRouting {
  FAX = 'fax',
  VOICEMAIL = 'voicemail'
}

/*
 * Greeting type
 */
export enum TelephonyVoicemailGreeting {
  DEFAULT = 'default',
  FULL = 'full',
  SHORT = 'short'
}

/**
 * Internal and external numbers for voicemail service
 */
export interface TelephonyVoicemailNumbers {
  external: string
  internal: string
}

/**
 * Voicemail Properties
 */
export interface TelephonyVoicemailProperties {
  annouceMessage: string
  audioFormat: TelephonyServiceVoicemailAudioFormat
  doNotRecord: boolean
  forcePassword: boolean
  fromEmail: string
  fromName: string
  fullGreetingSoundId?: number
  greetingType: TelephonyVoicemailGreeting
  isNewVersion: boolean
  keepMessage: boolean
  redirectionEmails: TelephonyServiceVoicemailNotifications[]
  shortGreetingSoundId?: number
  temporaryGreetingActivated: boolean
  temporaryGreetingSoundId?: number
  unreadMessages: number
}


export class Freefax {
  constructor(private client: Client) {}

  /**
   * Operations about the VOIP service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/freefax`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Freefax properties [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<FreefaxFreefaxProperties> {
    let url = `/freefax/${serviceName}`

    return this.client.request<FreefaxFreefaxProperties>('GET', url)
  }

  /**
   * Freefax properties [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: FreefaxFreefaxProperties): Promise<void> {
    let url = `/freefax/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * changePassword operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/changePassword#POST)
   */
  GeneratesANewPasswordForYourFaxAccount(serviceName: string): Promise<string> {
    let url = `/freefax/${serviceName}/changePassword`

    return this.client.request<string>('POST', url)
  }

  /**
   * mainService operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/mainService#GET)
   */
  MainServiceAttachedToFreefax(serviceName: string): Promise<string> {
    let url = `/freefax/${serviceName}/mainService`

    return this.client.request<string>('GET', url)
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
  ChangeTheVoicemailPasswordItMustBe4Digit(password: string, serviceName: string): Promise<void> {
    let url = `/freefax/${serviceName}/voicemail/changePassword`

    return this.client.request<void>('POST', url, {password})
  }

  /**
   * changeRouting operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail/changeRouting#POST)
   */
  DisableEnableVoicemailAvailableOnlyIfTheLineHasFaxCapabilities(routing: TelephonyVoicefaxRouting, serviceName: string): Promise<void> {
    let url = `/freefax/${serviceName}/voicemail/changeRouting`

    return this.client.request<void>('POST', url, {routing})
  }

  /**
   * routing operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail/routing#GET)
   */
  GetTheStatusOfTheVoicemailAvailableOnlyIfTheLineHasFaxCapabilities(serviceName: string): Promise<TelephonyVoicefaxRouting> {
    let url = `/freefax/${serviceName}/voicemail/routing`

    return this.client.request<TelephonyVoicefaxRouting>('GET', url)
  }

  /**
   * voicemailNumbers operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/%7BserviceName%7D/voicemail/voicemailNumbers#GET)
   */
  GetNumberForInternalAndExternalVoicemail(serviceName: string): Promise<TelephonyVoicemailNumbers> {
    let url = `/freefax/${serviceName}/voicemail/voicemailNumbers`

    return this.client.request<TelephonyVoicemailNumbers>('GET', url)
  }

  /**
   * Get the credit balance and the remaining pages available for all our freefax [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/freefax/credits#GET)
   */
  GetTheCreditBalanceAndTheRemainingPagesAvailableForAllOurFreefax(): Promise<FreefaxBalanceInformations> {
    let url = `/freefax/credits`

    return this.client.request<FreefaxBalanceInformations>('GET', url)
  }

}
