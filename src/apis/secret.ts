// GENERATED SDK for secret API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * A secret
 */
export interface SecretSecret {
  expiration: string
  secret: string
}


export class Secret {
  constructor(private client: Client) {}

  /**
   * Retrieve a secret sent by email [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/secret/retrieve#POST)
   */
  RetrieveASecretSentByEmail(id: string): Promise<SecretSecret> {
    let url = `/secret/retrieve`

    return this.client.request<SecretSecret>('POST', url, {id})
  }

}
