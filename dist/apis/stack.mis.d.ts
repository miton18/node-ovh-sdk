import { Client } from '../client';
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
/**
 * Stack MIS
 */
export interface Stackmisproduct {
    domain: string;
    type: StackStackType;
}
export declare enum StackStackType {
    MDS = "MDS",
    MIS = "MIS",
    MOS = "MOS"
}
export declare class StackMis {
    private client;
    constructor(client: Client);
    /**
     * Operations about the GS service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/stack/mis#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Stack MIS [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/stack/mis/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<Stackmisproduct>;
    /**
     * Details about a Service [PRODUCTION]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/stack/mis/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/stack/mis/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
}
//# sourceMappingURL=stack.mis.d.ts.map