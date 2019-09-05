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
 * Certificate of an SSL customer
 */
export interface SslCertificate {
    authority: SslCertificateAuthority;
    certificate?: string;
    chain?: string;
    commonName: string;
    csr: string;
    serviceName: string;
    status: SslCertificateStatus;
    subjectAltName: string[];
    type: SslCertificateType;
    validityEnd?: string;
    validityStart?: string;
}
export declare enum SslCertificateAuthority {
    COMODO = "comodo",
    SECTIGO = "sectigo"
}
export declare enum SslCertificateStatus {
    CREATING = "creating",
    ERROR = "error",
    OK = "ok",
    VALIDATING = "validating"
}
export declare enum SslCertificateType {
    DV = "DV",
    EV = "EV",
    OV = "OV"
}
/**
 * Task on a SSL
 */
export interface SslOperation {
    doneDate?: string;
    function: SslOperationFunction;
    lastUpdate: string;
    startDate: string;
    status: SslOperationStatus;
    taskId: number;
}
export declare enum SslOperationFunction {
    CREATECERTIFICATE = "createCertificate"
}
export declare enum SslOperationStatus {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export declare class Ssl {
    private client;
    constructor(client: Client);
    /**
     * Operations about the SSL service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Certificate of an SSL customer [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl/%7BserviceName%7D#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<SslCertificate>;
    /**
     * Details about a Service [BETA]
    * [WARN] This API action is not ready (duplicate name)
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl/%7BserviceName%7D/serviceInfos#GET)
     */
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     * List the ssl.Operation objects [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl/%7BserviceName%7D/tasks#GET)
     */
    TasksAssociatedToThisSsl(serviceName: string): Promise<number[]>;
}
//# sourceMappingURL=ssl.d.ts.map