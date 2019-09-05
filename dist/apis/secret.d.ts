import { Client } from '../client';
/**
 * A secret
 */
export interface SecretSecret {
    expiration: string;
    secret: string;
}
export declare class Secret {
    private client;
    constructor(client: Client);
    /**
     * Retrieve a secret sent by email [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/secret/retrieve#POST)
     */
    RetrieveASecretSentByEmail(id: string): Promise<SecretSecret>;
}
//# sourceMappingURL=secret.d.ts.map