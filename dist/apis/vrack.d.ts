import { Client } from '../client';
export interface ComplexTypeUnitAndValue<T> {
    unit: string;
    value: T;
}
export declare enum DedicatedserverMrtgPeriodEnum {
    DAILY = "daily",
    HOURLY = "hourly",
    MONTHLY = "monthly",
    WEEKLY = "weekly",
    YEARLY = "yearly"
}
export interface DedicatedserverMrtgTimestampValue {
    value?: any;
    timestamp: number;
}
export declare enum DedicatedserverMrtgTypeEnum {
    ERRORS_DOWNLOAD = "errors:download",
    ERRORS_UPLOAD = "errors:upload",
    PACKETS_DOWNLOAD = "packets:download",
    PACKETS_UPLOAD = "packets:upload",
    TRAFFIC_DOWNLOAD = "traffic:download",
    TRAFFIC_UPLOAD = "traffic:upload"
}
export declare enum ServiceStateEnum {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export interface ServicesNonExpiringService {
    contactBilling: string;
    serviceId: number;
    contactAdmin: string;
    creation: string;
    contactTech: string;
    status: ServiceStateEnum;
    domain: string;
}
export interface VrackAllowedDedicatedServerInterfaces {
    dedicatedServerInterface: string;
    name: string;
    dedicatedServer: string;
}
export interface VrackAllowedServices {
    dedicatedServer?: string[];
    dedicatedCloud?: string[];
    dedicatedConnect?: string[];
    ip?: string[];
    dedicatedCloudDatacenter?: string[];
    legacyVrack?: string[];
    cloudProject?: string[];
    dedicatedServerInterface?: VrackAllowedDedicatedServerInterfaces[];
    ipLoadbalancing?: string[];
}
export interface VrackcloudProject {
    vrack: string;
    project: string;
}
export interface VrackdedicatedCloud {
    vrack: string;
    dedicatedCloud: string;
    vlanId?: number;
}
export interface VrackdedicatedConnect {
    name: string;
}
export interface VrackdedicatedServer {
    vrack: string;
    dedicatedServer: string;
}
export interface VrackdedicatedServerInterface {
    vrack: string;
    dedicatedServerInterface: string;
}
export interface Vrackip {
    zone?: VrackVrackZoneEnum;
    gateway?: string;
    ip: string;
}
export interface Vrackiplb {
    ipLoadbalancing: string;
    vrack: string;
}
export interface VracklegacyVrack {
    vlanId: number;
    legacyVrack: string;
}
export interface Vracknasha {
    serviceIp: string;
    zpool: string;
}
export interface VrackpccDatacenter {
    datacenter: string;
    vrack: string;
    dedicatedCloud: string;
}
export interface VrackpublicRoutingOption {
    bandwidth?: number;
}
export interface VrackTask {
    serviceName?: string;
    lastUpdate?: string;
    orderId?: number;
    todoDate?: string;
    targetDomain?: string;
    status: VrackTaskStatusEnum;
    id: number;
    function: string;
}
export declare enum VrackTaskStatusEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    INIT = "init",
    TODO = "todo"
}
export interface Vrackvrack {
    name: string;
    description: string;
}
export declare enum VrackVrackZoneEnum {
    BHS = "bhs",
    FRA1 = "fra1",
    GRA = "gra",
    LON1 = "lon1",
    PDX1 = "pdx1",
    RBX = "rbx",
    SBG = "sbg",
    SGP1 = "sgp1",
    SYD1 = "syd1",
    WAS1 = "was1",
    WAW = "waw"
}
export declare class Vrack {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<Vrackvrack>;
    AlterThisObjectProperties(serviceName: string, payload: Vrackvrack): Promise<void>;
    ListAllServicesAllowedInThisVrack(serviceName: string): Promise<VrackAllowedServices>;
    VrackForPublicCloudProject(serviceName: string): Promise<string[]>;
    AddAPublicCloudProjectToThisVrack(project: string, serviceName: string): Promise<VrackTask>;
    RemoveThisPublicCloudProjectFromThisVrack(project: string, serviceName: string): Promise<VrackTask>;
    VrackDedicatedCloudVmNetwork(serviceName: string): Promise<string[]>;
    AddADedicatedCloudVmNetworkToThisVrack(dedicatedCloud: string, serviceName: string): Promise<VrackTask>;
    RemoveThisDedicatedCloudVmNetworkFromThisVrack(dedicatedCloud: string, serviceName: string): Promise<VrackTask>;
    VrackDedicatedCloudDatacenter(serviceName: string): Promise<string[]>;
    VracksAllowedForYourDedicatedCloudDatacenter(datacenter: string, serviceName: string): Promise<string[]>;
    MoveYourDedicatedCloudDatacenterFromAVrackToAnother(datacenter: string, serviceName: string, targetServiceName: string): Promise<VrackTask>;
    VrackDedicatedConnect(serviceName: string): Promise<string[]>;
    VrackForDedicatedServer(serviceName: string): Promise<string[]>;
    AddADedicatedServerToThisVrack(dedicatedServer: string, serviceName: string): Promise<VrackTask>;
    RemoveThisServerFromThisVrack(dedicatedServer: string, serviceName: string): Promise<VrackTask>;
    RetrieveVrackTrafficGraphValues(dedicatedServer: string, period: DedicatedserverMrtgPeriodEnum, serviceName: string, type: DedicatedserverMrtgTypeEnum): Promise<DedicatedserverMrtgTimestampValue[]>;
    VrackForDedicatedServerInterface(serviceName: string): Promise<string[]>;
    AddADedicatedServerInterfaceToThisVrack(dedicatedServerInterface: string, serviceName: string): Promise<VrackTask>;
    RemoveThisServerInterfaceFromThisVrack(dedicatedServerInterface: string, serviceName: string): Promise<VrackTask>;
    DetailsForAllDedicatedServerInterfacesInThisVrack(serviceName: string): Promise<VrackAllowedDedicatedServerInterfaces[]>;
    VrackForIPBlocks(serviceName: string): Promise<string[]>;
    AddAnIPBlockToThisVrack(block: string, serviceName: string): Promise<VrackTask>;
    RemoveThisIPBlockFromThisVrack(ip: string, serviceName: string): Promise<VrackTask>;
    AnnounceIPToZoneForVrack(ip: string, serviceName: string, zone: VrackVrackZoneEnum): Promise<VrackTask>;
    ZoneAvailableToAnnounceYourBlock(ip: string, serviceName: string): Promise<VrackVrackZoneEnum[]>;
    VrackForIpLoadbalancing(serviceName: string): Promise<string[]>;
    AddAnIpLoadbalancingToThisVrack(ipLoadbalancing: string, serviceName: string): Promise<VrackTask>;
    RemoveThisIpLoadbalancingFromThisVrack(ipLoadbalancing: string, serviceName: string): Promise<VrackTask>;
    VrackForLegacyVrack(serviceName: string): Promise<string[]>;
    AddALegacyVrackVrackXXXXToThisVrackPnXXXX(legacyVrack: string, serviceName: string): Promise<VrackTask>;
    RemoveThisLegacyVrackVrackXXXXFromThisVrackPnXXXX(legacyVrack: string, serviceName: string): Promise<VrackTask>;
    VrackTasks(serviceName: string): Promise<number[]>;
}
//# sourceMappingURL=vrack.d.ts.map