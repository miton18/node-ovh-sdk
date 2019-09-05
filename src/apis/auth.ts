// GENERATED SDK for auth API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * API Credential
 */
export interface Credential {
  applicationId: number
  creation: string
  credentialId: number
  expiration?: string
  lastUse?: string
  ovhSupport: boolean
  rules: AuthAccessRule[]
  status: AuthCredentialState
}

/**
 * Access rule required for the application
 */
export interface AuthAccessRule {
  method: HttpMethod
  path: string
}

/**
 * Credential request to get access to the API
 */
export interface AuthCredential {
  consumerKey: string
  state: AuthCredentialState
  validationUrl?: string
}

/*
 * All states a Credential can be in
 */
export enum AuthCredentialState {
  EXPIRED = 'expired',
  PENDINGVALIDATION = 'pendingValidation',
  REFUSED = 'refused',
  VALIDATED = 'validated'
}

/**
 * Details about the authentication used
 */
export interface AuthDetails {
  description?: string
  method: AuthMethod
  roles?: string[]
  user?: string
}

/*
 * All Authentication methods available
 */
export enum AuthMethod {
  ACCOUNT = 'account',
  PROVIDER = 'provider',
  USER = 'user'
}

/*
 * All HTTP methods available
 */
export enum HttpMethod {
  DELETE = 'DELETE',
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT'
}


export class Auth {
  constructor(private client: Client) {}

  /**
   * Operations with credentials [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/credential#POST)
   */
  RequestANewCredentialForYourApplication(accessRules: AuthAccessRule[], redirection?: string): Promise<AuthCredential> {
    let url = `/auth/credential`

    return this.client.request<AuthCredential>('POST', url, {accessRules, redirection})
  }

  /**
   * Get the current credential details [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/currentCredential#GET)
   */
  GetTheCurrentCredentialDetails(): Promise<Credential> {
    let url = `/auth/currentCredential`

    return this.client.request<Credential>('GET', url)
  }

  /**
   * Details about the current authentication [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/details#GET)
   */
  DetailsAboutTheCurrentAuthentication(): Promise<AuthDetails> {
    let url = `/auth/details`

    return this.client.request<AuthDetails>('GET', url)
  }

  /**
   * Expire current credential [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/logout#POST)
   */
  ExpireCurrentCredential(): Promise<void> {
    let url = `/auth/logout`

    return this.client.request<void>('POST', url)
  }

  /**
   * Get the time of OVH servers [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/auth/time#GET)
   */
  GetTheCurrentTimeOfTheOVHServersSinceUNIXEpoch(): Promise<number> {
    let url = `/auth/time`

    return this.client.request<number>('GET', url)
  }

}
