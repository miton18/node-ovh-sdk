// GENERATED SDK for contact API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  key: string
  value: T
}

/**
 * Form characteristics
 */
export interface ContactFormCharacteristic {
  keys: ContactKeyFormCharacteristic[]
  type: string
}

/**
 * Form key description
 */
export interface ContactKeyFormCharacteristic {
  key: string
  required: boolean
}


export class Contact {
  constructor(private client: Client) {}

  /**
   * Get form characteristics [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/contact/form#GET)
   */
  GetFormCharacteristics(): Promise<ContactFormCharacteristic[]> {
    let url = `/contact/form`

    return this.client.request<ContactFormCharacteristic[]>('GET', url)
  }

  /**
   * Send form following characteristics of /contact/form [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/contact/form/send#POST)
   */
  SendFormFollowingCharacteristicsOfContactform(form: any, type: string): Promise<void> {
    let url = `/contact/form/send`

    return this.client.request<void>('POST', url, {form, type})
  }

}
