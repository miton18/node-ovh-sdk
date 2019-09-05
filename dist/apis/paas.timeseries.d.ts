import { Client } from '../client';
export interface ComplexTypeUnitAndValue<T> {
    unit: string;
    value: T;
}
export declare enum OrderCurrencyCodeEnum {
    AUD = "AUD",
    CAD = "CAD",
    CZK = "CZK",
    EUR = "EUR",
    GBP = "GBP",
    LTL = "LTL",
    MAD = "MAD",
    N_A = "N/A",
    PLN = "PLN",
    SGD = "SGD",
    TND = "TND",
    USD = "USD",
    XOF = "XOF",
    POINTS = "points"
}
export interface OrderPrice {
    text: string;
    value: any;
    currencyCode: OrderCurrencyCodeEnum;
}
export interface PaastimeseriesConsumption {
    to: string;
    generated: string;
    total: OrderPrice;
    from: string;
    items: PaastimeseriesConsumptionItem[];
}
export declare enum PaastimeseriesconsumptionitemMetricNameEnum {
    STORAGE = "storage",
    INPUT = "input",
    OUTPUT = "output"
}
export interface PaastimeseriesConsumptionItem {
    unitPrice: OrderPrice;
    quantity: any;
    price: OrderPrice;
    metricName: PaastimeseriesconsumptionitemMetricNameEnum;
}
export interface PaastimeseriesKey {
    tags: PaastimeseriesTag[];
    secret: string;
    permissions: PaastimeseriesPermissionEnum[];
    id: string;
    description: string;
}
export declare enum PaastimeseriesPermissionEnum {
    READ = "READ",
    WRITE = "WRITE"
}
export interface PaastimeseriesProject {
    serviceName: string;
    description?: string;
    region: PaastimeseriesRegion;
    displayName: string;
}
export interface PaastimeseriesQuota {
    max: number;
    current: number;
    type: PaastimeseriesQuotaTypeEnum;
}
export declare enum PaastimeseriesQuotaTypeEnum {
    DDP = "ddp",
    MADS = "mads"
}
export interface PaastimeseriesRegion {
    url: string;
    displayName: string;
    id: string;
}
export interface PaastimeseriesTag {
    key: string;
    value: string;
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
    automatic: boolean;
    forced: boolean;
    period?: number;
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
    expiration: string;
    domain: string;
    status: ServiceStateEnum;
    contactBilling: string;
    possibleRenewPeriod?: number[];
    engagedUpTo?: string;
    contactTech: string;
    serviceId: number;
    renewalType: ServiceRenewalTypeEnum;
    contactAdmin: string;
    renew?: ServiceRenewType;
    canDeleteAtExpiration: boolean;
}
export interface TimeseriesProject {
    regionId?: string;
    offerId?: string;
    serviceName: string;
    status?: TimeseriesStatusTypeEnum;
    description?: string;
    displayName?: string;
}
export declare enum TimeseriesStatusTypeEnum {
    ACTIVE = "ACTIVE",
    CREATION = "CREATION",
    DELETED = "DELETED",
    UNCONFIGURED = "UNCONFIGURED"
}
export declare class PaasTimeseries {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<TimeseriesProject>;
    AlterThisObjectProperties(serviceName: string, payload: TimeseriesProject): Promise<void>;
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    GetConsumption(serviceName: string): Promise<PaastimeseriesConsumption[]>;
    GetKeysForAProject(serviceName: string): Promise<PaastimeseriesKey[]>;
    CreateAKeyForAProject(permissions: string[], serviceName: string, tags: PaastimeseriesTag[], description?: string): Promise<PaastimeseriesKey>;
    GetAKey(keyId: string, serviceName: string): Promise<PaastimeseriesKey>;
    CreateAKey(keyId: string, permissions: PaastimeseriesPermissionEnum[], serviceName: string, tags: PaastimeseriesTag[], description?: string): Promise<PaastimeseriesKey>;
    DeleteAOpenTSDBToken(keyId: string, serviceName: string): Promise<boolean>;
    GetQuotas(serviceName: string): Promise<PaastimeseriesQuota[]>;
    SetupAProject(displayName: string, serviceName: string, description?: string, raTokenId?: string, raTokenKey?: string, regionId?: string): Promise<PaastimeseriesProject>;
    GetAvailableRegions(): Promise<PaastimeseriesRegion[]>;
}
//# sourceMappingURL=paas.timeseries.d.ts.map