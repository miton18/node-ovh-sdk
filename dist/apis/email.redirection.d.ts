import { Client } from '../client';
/**
 * Account name
 */
export interface EmailredirectionAccount {
    createdAt: string;
    destinations: string[];
    domain: string;
    id: string;
    updatedAt: string;
    username: string;
}
/**
 * Destination address
 */
export interface EmailredirectionDestination {
    createdAt: string;
    destination: string;
    id: string;
    updatedAt: string;
}
/**
 * Domain
 */
export interface EmailredirectionDomain {
    createdAt: string;
    id: string;
    name: string;
    status: EmailredirectionDomainStatus;
    updatedAt: string;
    validUntil: string;
    verified: boolean;
}
export declare enum EmailredirectionDomainStatus {
    ACTIVE = "active",
    SUSPENDED = "suspended"
}
/**
 * Information about service
 */
export interface EmailredirectionService {
    serviceName: string;
}
/**
 * Informations about validation status
 */
export interface EmailredirectionValidation {
    domainId: string;
    domainName: string;
    domainValidationPossibilities: EmailredirectionValidationMethods;
    nextCheck: string;
    validUntil: string;
    verified: boolean;
}
/**
 * Availalbe methods of validation
 */
export interface EmailredirectionValidationMethods {
    cname: EmailredirectionValidationMethodsCname;
    txt: EmailredirectionValidationMethodsTxt;
}
/**
 * Information for validation with Cname record
 */
export interface EmailredirectionValidationMethodsCname {
    address: string;
    record: string;
}
/**
 * Information for validation with TXT record
 */
export interface EmailredirectionValidationMethodsTxt {
    record: string;
    value: string;
}
/**
 * Domain
 */
export interface EmailredirectionVerificationDomain {
    checkValidation: boolean;
    createdAt: string;
    id: string;
    name: string;
    status: EmailredirectionVerificationDomainStatus;
    updatedAt: string;
    validUntil: string;
    verified: boolean;
}
export declare enum EmailredirectionVerificationDomainStatus {
    ACTIVE = "active",
    SUSPENDED = "suspended"
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
export declare enum ServiceTerminationFutureUse {
    NOT_REPLACING_SERVICE = "NOT_REPLACING_SERVICE",
    OTHER = "OTHER",
    SUBSCRIBE_AN_OTHER_SERVICE = "SUBSCRIBE_AN_OTHER_SERVICE",
    SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
    SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
}
export declare enum ServiceTerminationReason {
    FEATURES_DONT_SUIT_ME = "FEATURES_DONT_SUIT_ME",
    LACK_OF_PERFORMANCES = "LACK_OF_PERFORMANCES",
    MIGRATED_TO_ANOTHER_OVH_PRODUCT = "MIGRATED_TO_ANOTHER_OVH_PRODUCT",
    MIGRATED_TO_COMPETITOR = "MIGRATED_TO_COMPETITOR",
    NOT_ENOUGH_RECOGNITION = "NOT_ENOUGH_RECOGNITION",
    NOT_NEEDED_ANYMORE = "NOT_NEEDED_ANYMORE",
    NOT_RELIABLE = "NOT_RELIABLE",
    NO_ANSWER = "NO_ANSWER",
    OTHER = "OTHER",
    PRODUCT_DIMENSION_DONT_SUIT_ME = "PRODUCT_DIMENSION_DONT_SUIT_ME",
    PRODUCT_TOOLS_DONT_SUIT_ME = "PRODUCT_TOOLS_DONT_SUIT_ME",
    TOO_EXPENSIVE = "TOO_EXPENSIVE",
    TOO_HARD_TO_USE = "TOO_HARD_TO_USE",
    UNSATIFIED_BY_CUSTOMER_SUPPORT = "UNSATIFIED_BY_CUSTOMER_SUPPORT"
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
export declare class EmailRedirection {
    private client;
    constructor(client: Client);
}
//# sourceMappingURL=email.redirection.d.ts.map