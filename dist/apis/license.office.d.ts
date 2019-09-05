import { Client } from '../client';
export declare enum LicenseofficeDomainStateEnum {
    OK = "ok",
    UNVERIFIED = "unverified"
}
export declare enum LicenseofficeLicenceEnum {
    OFFICEBUSINESS = "officeBusiness",
    OFFICEPROPLUS = "officeProPlus"
}
export interface LicenseofficeOfficeDomain {
    status: LicenseofficeDomainStateEnum;
    domainName: string;
    txtEntry: string;
}
export interface LicenseofficeOfficeSubscription {
    lastUpdate?: string;
    id: number;
    creationDate: string;
    status: string;
    taskPendingId: number;
    licenseId: number;
    quantity: number;
}
export interface LicenseofficeOfficeTask {
    finishDate?: string;
    id: number;
    status: LicenseofficeTaskStatusEnum;
    function: string;
    todoDate: string;
}
export interface LicenseofficeOfficeTenant {
    displayName: string;
    serviceType: LicenseofficeServiceTypeEnum;
    lastName: string;
    status: LicenseofficeServiceStateEnum;
    address: string;
    city: string;
    phone: any;
    firstName: string;
    zipCode: string;
    creationDate: string;
}
export interface LicenseofficeOfficeUser {
    taskPendingId: number;
    deleteAtExpiration: boolean;
    isVirtual: boolean;
    firstName: string;
    status: LicenseofficeUserStateEnum;
    activationEmail: string;
    licences: LicenseofficeLicenceEnum[];
    lastName: string;
}
export declare enum LicenseofficeServiceStateEnum {
    CREATING = "creating",
    INMAINTENANCE = "inMaintenance",
    OK = "ok",
    SUSPENDED = "suspended"
}
export declare enum LicenseofficeServiceTypeEnum {
    PAYASYOUGO = "payAsYouGo",
    PREPAID = "prepaid"
}
export interface LicenseofficeStatistic {
    available: number;
    licenseId: number;
    used: number;
}
export interface LicenseofficeStatistics {
    date: string;
    lines: LicenseofficeStatisticsLine[];
}
export interface LicenseofficeStatisticsLine {
    peakCount: number;
    endOfDayCount: number;
    licenceType: LicenseofficeLicenceEnum;
}
export declare enum LicenseofficeTaskStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export declare enum LicenseofficeUserStateEnum {
    CREATING = "creating",
    DELETING = "deleting",
    OK = "ok"
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
    period?: number;
    automatic: boolean;
    deleteAtExpiration: boolean;
    forced: boolean;
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
    renewalType: ServiceRenewalTypeEnum;
    renew?: ServiceRenewType;
    contactTech: string;
    serviceId: number;
    canDeleteAtExpiration: boolean;
    creation: string;
    contactAdmin: string;
    possibleRenewPeriod?: number[];
    engagedUpTo?: string;
    contactBilling: string;
    expiration: string;
    domain: string;
    status: ServiceStateEnum;
}
export declare class LicenseOffice {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<LicenseofficeOfficeTenant>;
    AlterThisObjectProperties(serviceName: string, payload: LicenseofficeOfficeTenant): Promise<void>;
    DomainAssociatedToThisOfficeTenant(serviceName: string): Promise<string[]>;
    TasksAssociatedToThisOfficeTenant(serviceName: string): Promise<number[]>;
    ShowsTheSubscriptionsUsageStatisticsForTheGivenTimePeriod(from: string, serviceName: string, to: string): Promise<LicenseofficeStatistics[]>;
    AccountsAssociatedToThisOfficeTenant(serviceName: string, activationEmail?: string, firstName?: string, lastName?: string, licences?: LicenseofficeLicenceEnum[]): Promise<string[]>;
    CreateNewOfficeUser(domain: string, licence: LicenseofficeLicenceEnum, login: string, serviceName: string, firstName?: string, lastName?: string): Promise<LicenseofficeOfficeTask>;
    DeleteExistingOfficeUser(activationEmail: string, serviceName: string): Promise<LicenseofficeOfficeTask>;
    ChangeOrResetUserPassword(activationEmail: string, serviceName: string, shouldSendMail: boolean, notifyEmail?: string, password?: string): Promise<LicenseofficeOfficeTask>;
}
//# sourceMappingURL=license.office.d.ts.map