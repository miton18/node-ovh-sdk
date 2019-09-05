import { Client } from '../client';
/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
    key: string;
    value: T;
}
/**
 * Form characteristics
 */
export interface ContactFormCharacteristic {
    keys: ContactKeyFormCharacteristic[];
    type: string;
}
/**
 * Form key description
 */
export interface ContactKeyFormCharacteristic {
    key: string;
    required: boolean;
}
export declare class Contact {
    private client;
    constructor(client: Client);
    /**
     * Get form characteristics [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/contact/form#GET)
     */
    GetFormCharacteristics(): Promise<ContactFormCharacteristic[]>;
    /**
     * Send form following characteristics of /contact/form [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/contact/form/send#POST)
     */
    SendFormFollowingCharacteristicsOfContactform(form: any, type: string): Promise<void>;
}
//# sourceMappingURL=contact.d.ts.map