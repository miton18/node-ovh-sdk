import { Client } from '../client';
/**
 * The new framework password
 */
export interface Dockerframeworkpassword {
    password: string;
}
/**
 * A host on which containers can be deployed
 */
export interface Dockerslave {
    createdAt: string;
    flavorId: string;
    id: string;
    metrics: Dockerslavemetrics;
    name: string;
    region: string;
    stack: string;
    state: Dockerslavestatus;
    updatedAt: string;
}
/**
 * Attributes of the slave flavor
 */
export interface Dockerslaveflavor {
    bandwidth: number;
    cpus: number;
    disk: number;
    diskHa: boolean;
    id: string;
    isVm: boolean;
    ram: number;
}
/**
 * Application data
 */
export interface Dockerslaveframeworkapp {
    cpu?: number;
    env: Dockerslaveframeworkappenvironment[];
    id?: string;
    image?: string;
    instances?: number;
    mem?: number;
    ports: Dockerslaveframeworkappport[];
    status?: string;
    volumes: Dockerslaveframeworkappvolume[];
}
/**
 * Application environment variable
 */
export interface Dockerslaveframeworkappenvironment {
    key?: string;
    value?: string;
}
/**
 * Application ports
 */
export interface Dockerslaveframeworkappport {
    containerPort?: number;
    hostPort?: number;
    protocol?: string;
}
/**
 * Application volumes
 */
export interface Dockerslaveframeworkappvolume {
    containerPath?: number;
    hostPath?: number;
    mode?: string;
}
/**
 * Metrics about slave usage
 */
export interface Dockerslavemetrics {
    resources: Dockerslavemetricsresources;
    usedResources: DockerslavemetricsusedResources;
}
/**
 * Metrics about available slave resources
 */
export interface Dockerslavemetricsresources {
    cpu?: number;
    mem?: number;
}
/**
 * Metrics about used slave resources
 */
export interface DockerslavemetricsusedResources {
    cpu?: number;
    mem?: number;
}
export declare enum Dockerslavestatus {
    BLOCKED = "blocked",
    CREATED = "created",
    CREATING = "creating"
}
/**
 * An isolated client Docker PaaS environment
 */
export interface Dockerstack {
    cluster?: string;
    createdAt: string;
    loadBalancer: string;
    metrics: Dockerslavemetrics;
    name: string;
    slaves: string[];
    updatedAt: string;
}
/**
 * A custom SSL certificate associated to a Docker PaaS environment
 */
export interface DockerstackcustomSsl {
    certificate: string;
    createdAt: string;
    updatedAt: string;
}
/**
 * Action validation message
 */
export interface DockerstackcustomSslMessage {
    message: string;
}
/**
 * A custom SSL certificate associated to a Docker PaaS environment
 */
export interface DockerstackinputCustomSsl {
    certificate: string;
    key: string;
}
/**
 * Credentials providing authentication to an external registry
 */
export interface DockerstackregistryCredentials {
    createdAt: string;
    registryUrl: string;
    updatedAt: string;
    username: string;
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
/**
 * A framework installed for a docker PaaS stack
 */
export interface Stackframework {
    accessUrl: string;
    createdAt: string;
    id: string;
    name: string;
    updatedAt: string;
}
/**
 * Application deployed on the framework
 */
export interface Stackframeworkapplication {
    apps: Dockerslaveframeworkapp[];
}
export declare class CaasContainers {
    private client;
    constructor(client: Client);
    /**
     * Operations about the DOCKER service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D#GET)
     */
    InspectTheArgumentStack(serviceName: string): Promise<Dockerstack>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/availableFrameworks#GET)
     */
    ListAllTheInstallableMesosFrameworks(serviceName: string): Promise<string[]>;
    /**
     * Change the contacts of this service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/frameworks#GET)
     */
    ListTheFrameworksInstalledOnTheArgumentStack(serviceName: string): Promise<string[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/frameworks/%7BframeworkId%7D#GET)
     */
    InspectTheStackFramework(frameworkId: string, serviceName: string): Promise<Stackframework>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/frameworks/%7BframeworkId%7D/apps#GET)
     */
    ListAppsInTheFramework(frameworkId: string, serviceName: string): Promise<Stackframeworkapplication>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/frameworks/%7BframeworkId%7D/password#PUT)
     */
    UpdateTheFrameworkAccessPassword(frameworkId: string, serviceName: string, payload: Dockerframeworkpassword): Promise<void>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials#POST)
     */
    AssociateTheStackWithSomeCredentialsToAnAuthenticatedRegistry(serviceName: string, payload: DockerstackinputCustomSsl): Promise<DockerstackregistryCredentials>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials#GET)
     */
    ListTheRegistryCredentialsAssociatedToTheStack(serviceName: string): Promise<string[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials/%7BcredentialsId%7D#PUT)
     */
    UpdateTheRegistryCredentials(credentialsId: string, serviceName: string, payload: DockerstackinputCustomSsl): Promise<DockerstackregistryCredentials>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials/%7BcredentialsId%7D#GET)
     */
    InspectTheImageRegistryCredentialsAssociatedToTheStack(credentialsId: string, serviceName: string): Promise<DockerstackregistryCredentials>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials/%7BcredentialsId%7D#DELETE)
     */
    DeleteTheRegistryCredentials(credentialsId: string, serviceName: string): Promise<void>;
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<ServicesService>;
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/slaves#GET)
     */
    ListTheIdOfTheRegisteredSlaveInstances(serviceName: string): Promise<string[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/slaves/%7BslaveId%7D#GET)
     */
    InspectTheArgumentUserSlaveInstance(serviceName: string, slaveId: string): Promise<Dockerslave>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/ssl#PUT)
     */
    UpdateTheCustomSSLCertificateAndPrivate(serviceName: string, payload: DockerstackinputCustomSsl): Promise<DockerstackcustomSslMessage>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/ssl#DELETE)
     */
    DeleteTheCustomSSLCertificateAndPrivateKeyAssociatedToTheStack(serviceName: string): Promise<DockerstackcustomSslMessage>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/ssl#GET)
     */
    InspectTheCustomSSLCertificateAndPrivate(serviceName: string): Promise<DockerstackcustomSsl>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/slaves/flavors#GET)
     */
    ListTheCloudFlavorsAvailableForTheDockerPaaSSlaves(): Promise<string[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/slaves/flavors/%7BflavorId%7D#GET)
     */
    InspectTheArgumentSlaveFlavor(flavorId: string): Promise<Dockerslaveflavor>;
}
//# sourceMappingURL=caas.containers.d.ts.map