import { Client } from '../client';
export declare enum ServiceRenewalTypeEnum {
    AUTOMATICFORCEDPRODUCT = "automaticForcedProduct",
    AUTOMATICV2012 = "automaticV2012",
    AUTOMATICV2014 = "automaticV2014",
    AUTOMATICV2016 = "automaticV2016",
    MANUAL = "manual",
    ONESHOT = "oneShot",
    OPTION = "option"
}
export interface ServiceRenewType {
    automatic: boolean;
    deleteAtExpiration: boolean;
    forced: boolean;
    period?: number;
    manualPayment?: boolean;
}
export declare enum ServiceStateEnum {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export interface ServicesService {
    engagedUpTo?: string;
    canDeleteAtExpiration: boolean;
    serviceId: number;
    contactAdmin: string;
    possibleRenewPeriod?: number[];
    renew?: ServiceRenewType;
    contactTech: string;
    domain: string;
    status: ServiceStateEnum;
    renewalType: ServiceRenewalTypeEnum;
    expiration: string;
    contactBilling: string;
    creation: string;
}
export interface VipSupportVip {
    serviceName: string;
    universe: VipUniverseEnum[];
}
export declare enum VipUniverseEnum {
    CLOUD = "cloud",
    DEDICATED = "dedicated",
    TELECOM = "telecom",
    WEB = "web"
}
export declare class Vip {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<VipSupportVip>;
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
}
//# sourceMappingURL=vip.d.ts.map