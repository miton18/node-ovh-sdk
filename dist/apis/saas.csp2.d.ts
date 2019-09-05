import { Client } from '../client';
export declare enum MsServicesLicensePeriodEnum {
    LASTMONTH = "lastMonth",
    LASTQUARTER = "lastQuarter",
    LASTWEEK = "lastWeek",
    LASTYEAR = "lastYear"
}
export interface Saascsp2BillingStatistics {
    lines: Saascsp2BillingStatisticsLine[];
    startDate: string;
    endDate: string;
}
export interface Saascsp2BillingStatisticsLine {
    licenceId: number;
    licenceName: string;
    peakCount: number;
}
export declare enum Saascsp2LicenseTypeEnum {
    ADDON = "ADDON",
    NON_SPECIFIC = "NON-SPECIFIC"
}
export interface Saascsp2OfficeLicence {
    name: string;
    newSubscriptionsAllowed: boolean;
    licenceType: Saascsp2LicenseTypeEnum;
    limit?: number;
    newSeatsAllowed: boolean;
    id: number;
}
export interface Saascsp2OfficeSubscription {
    creationDate: string;
    quantity: number;
    id: number;
    status: string;
    licenseId: number;
    lastUpdate?: string;
    taskPendingId: number;
}
export interface Saascsp2OfficeTask {
    function: string;
    id: number;
    finishDate?: string;
    status: Saascsp2TaskStatusEnum;
    todoDate: string;
}
export interface Saascsp2OfficeTenant {
    city: string;
    phone: any;
    lastName: string;
    displayName: string;
    creationDate: string;
    firstName: string;
    email: string;
    status: Saascsp2ServiceStateEnum;
    zipCode: string;
    serviceName: string;
    address: string;
}
export declare enum Saascsp2ServiceStateEnum {
    CREATING = "creating",
    INMAINTENANCE = "inMaintenance",
    OK = "ok",
    SUSPENDED = "suspended"
}
export interface Saascsp2Statistics {
    date: string;
    lines: Saascsp2StatisticsLine[];
}
export interface Saascsp2StatisticsLine {
    peakCount: number;
    licenceName: string;
    licenceId: number;
    endOfDayCount: number;
}
export declare enum Saascsp2SupportedServiceEnum {
    EMAIL = "Email",
    INTUNE = "Intune",
    OFFICECOMMUNICATIONSONLINE = "OfficeCommunicationsOnline"
}
export declare enum Saascsp2TaskStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
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
    manualPayment?: boolean;
    deleteAtExpiration: boolean;
    period?: number;
    automatic: boolean;
    forced: boolean;
}
export declare enum ServiceStateEnum {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export interface ServicesService {
    creation: string;
    contactAdmin: string;
    expiration: string;
    renew?: ServiceRenewType;
    canDeleteAtExpiration: boolean;
    domain: string;
    renewalType: ServiceRenewalTypeEnum;
    status: ServiceStateEnum;
    contactTech: string;
    serviceId: number;
    engagedUpTo?: string;
    contactBilling: string;
    possibleRenewPeriod?: number[];
}
export declare class SaasCsp2 {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<Saascsp2OfficeTenant>;
    AlterThisObjectProperties(serviceName: string, payload: Saascsp2OfficeTenant): Promise<void>;
    GetTheCurrenBillingPeriodUsagePeakForEachSubscription(serviceName: string): Promise<Saascsp2BillingStatistics>;
    ChangesTheTenantAdministratorPassword(newPassword: string, serviceName: string): Promise<Saascsp2OfficeTask>;
    AutomaticallySetsUpAnOVHhostedDomainOfYoursForYourOffice365ServicesNoteThisRequiresTheDomainToNotHaveAnyInterferingMXSRVTXTRecords(domain: string, serviceName: string, supportedServices: Saascsp2SupportedServiceEnum[]): Promise<Saascsp2OfficeTask>;
    LicensesAvailableForOrder(serviceName: string): Promise<number[]>;
    SubscriptionsAssociatedToThisOfficeTenant(serviceName: string): Promise<number[]>;
    AddASubscriptionToThisTenant(licenseId: number, quantity: number, serviceName: string): Promise<Saascsp2OfficeTask>;
    DeleteASubscriptionFromThisTenant(id: number, serviceName: string): Promise<Saascsp2OfficeTask>;
    AddonSubscriptionsAssociatedToThisOfficeSubscription(id: number, serviceName: string): Promise<number[]>;
    GivesAListOfLicensesIdsThatCanBeOrderedAsAnAddonForThisSubscription(id: number, serviceName: string): Promise<number[]>;
    ChangeTheQuantityOfSeatsInTheSubscription(id: number, quantity: number, serviceName: string): Promise<Saascsp2OfficeTask>;
    CreatesANewSubscriptionAsAnAddonForThisSubscription(id: number, licenseId: number, quantity: number, serviceName: string): Promise<Saascsp2OfficeTask>;
    PendingTasksOfThisTenant(serviceName: string): Promise<number[]>;
    GetTheUsageStatisticsOverTheChosePeriod(serviceName: string, timePeriod: MsServicesLicensePeriodEnum): Promise<Saascsp2Statistics[]>;
}
//# sourceMappingURL=saas.csp2.d.ts.map