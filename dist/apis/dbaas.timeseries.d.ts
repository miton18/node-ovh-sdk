import { Client } from '../client';
export interface ComplexTypeUnitAndValue<T> {
    value: T;
    unit: string;
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
    currencyCode: OrderCurrencyCodeEnum;
    value: any;
    text: string;
}
export interface PaastimeseriesConsumption {
    from: string;
    items: PaastimeseriesConsumptionItem[];
    to: string;
    generated: string;
    total: OrderPrice;
}
export declare enum PaastimeseriesconsumptionitemMetricNameEnum {
    STORAGE = "storage",
    INPUT = "input",
    OUTPUT = "output"
}
export interface PaastimeseriesConsumptionItem {
    unitPrice: OrderPrice;
    price: OrderPrice;
    quantity: any;
    metricName: PaastimeseriesconsumptionitemMetricNameEnum;
}
export interface PaastimeseriesKey {
    id: string;
    permissions: PaastimeseriesPermissionEnum[];
    description: string;
    tags: PaastimeseriesTag[];
    secret: string;
}
export interface PaastimeseriesOpenTSDBToken {
    protocol: string;
    id: string;
    description: string;
    tags: PaastimeseriesTag[];
    secret: string;
    permission: string;
}
export declare enum PaastimeseriesPermissionEnum {
    READ = "READ",
    WRITE = "WRITE"
}
export interface PaastimeseriesProject {
    description?: string;
    region: PaastimeseriesRegion;
    displayName: string;
    serviceName: string;
}
export interface PaastimeseriesQuota {
    type: PaastimeseriesQuotaTypeEnum;
    max: number;
    current: number;
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
    value: string;
    key: string;
}
export interface PaastimeseriesWarp10Token {
    secret: string;
    id: string;
    permissions: string;
    expiryTimestamp: string;
    maxOps: number;
    maxGts: number;
    description: string;
    queryToken: string;
    maxFetch: number;
    protocol: string;
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
    status: ServiceStateEnum;
    expiration: string;
    domain: string;
    contactBilling: string;
    engagedUpTo?: string;
    creation: string;
    contactAdmin: string;
    possibleRenewPeriod?: number[];
    serviceId: number;
    canDeleteAtExpiration: boolean;
    contactTech: string;
    renew?: ServiceRenewType;
    renewalType: ServiceRenewalTypeEnum;
}
export interface TimeseriesProject {
    serviceName: string;
    displayName?: string;
    regionId?: string;
    offerId?: string;
    description?: string;
    status?: TimeseriesStatusTypeEnum;
}
export declare enum TimeseriesStatusTypeEnum {
    ACTIVE = "ACTIVE",
    CREATION = "CREATION",
    DELETED = "DELETED",
    UNCONFIGURED = "UNCONFIGURED"
}
export declare class DbaasTimeseries {
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
    GetOpenTSDBTokens(serviceName: string): Promise<PaastimeseriesOpenTSDBToken[]>;
    CreateAOpenTSDBToken(permission: string, serviceName: string, tags: PaastimeseriesTag[], description?: string): Promise<PaastimeseriesOpenTSDBToken>;
    GetAOpenTSDBToken(serviceName: string, tokenId: string): Promise<PaastimeseriesOpenTSDBToken>;
    DeleteAnOpenTSDBToken(serviceName: string, tokenId: string): Promise<boolean>;
    GetAvailableRegions(): Promise<PaastimeseriesRegion[]>;
}
//# sourceMappingURL=dbaas.timeseries.d.ts.map