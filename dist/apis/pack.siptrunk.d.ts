import { Client } from '../client';
/**
 * Pack of SIP trunk services
 */
export interface PacksiptrunkPackSipTrunk {
    packName: string;
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
export declare class PackSiptrunk {
    private client;
    constructor(client: Client);
    /**
     * Operations about the PACK service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Pack of SIP trunk services [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk/%7BpackName%7D#GET)
     */
    GetThisObjectProperties(packName: string): Promise<PacksiptrunkPackSipTrunk>;
    /**
     * Change the contacts of this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk/%7BpackName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(packName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk/%7BpackName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/pack/siptrunk/%7BpackName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(packName: string, payload: ServicesService): Promise<void>;
}
//# sourceMappingURL=pack.siptrunk.d.ts.map