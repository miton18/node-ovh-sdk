import { Client } from '../client';
/**
 * An image stored in a namespace
 */
export interface Registryimage {
    createdAt: string;
    id: string;
    name: string;
    public: boolean;
    status: Registryimagestatus;
    updatedAt: string;
}
export declare enum Registryimagestatus {
    DELETING = "DELETING",
    DEPLOYING = "DEPLOYING",
    ERROR = "ERROR",
    OK = "OK"
}
/**
 * A container image
 */
export interface RegistryinputImage {
    public: boolean;
}
/**
 * A namespace in which a user can either read, write or delete images
 */
export interface RegistryinputNamespace {
    name: string;
}
/**
 * Permissions of a user over a namespace
 */
export interface RegistryinputPermissions {
    canRead: boolean;
    canWrite: boolean;
    isAdmin: boolean;
    status: Registrypermissionstatus;
    userId: string;
}
/**
 * A registry user account
 */
export interface RegistryinputUser {
    description: string;
}
/**
 * A namespace in which a user can either read, write or delete images
 */
export interface Registrynamespace {
    createdAt: string;
    id: string;
    name: string;
    status: Registrynamespacestatus;
    updatedAt: string;
}
export declare enum Registrynamespacestatus {
    DELETING = "DELETING",
    DEPLOYING = "DEPLOYING",
    ERROR = "ERROR",
    OK = "OK"
}
export declare enum Registrypermissionstatus {
    DELETING = "DELETING",
    DEPLOYING = "DEPLOYING",
    ERROR = "ERROR",
    OK = "OK"
}
/**
 * Permissions of a user over a namespace
 */
export interface Registrypermissions {
    canRead: boolean;
    canWrite: boolean;
    createdAt: string;
    id: string;
    isAdmin: boolean;
    status: Registrypermissionstatus;
    updatedAt: string;
    userId: string;
}
/**
 * The client subscription to the registry service
 */
export interface Registryservice {
    createdAt: string;
    endpoint: string;
    id: string;
    maxNamespaces: number;
    maxUsers: number;
    updatedAt: string;
    zone: string;
}
/**
 * An image tag
 */
export interface Registrytag {
    createdAt: string;
    id: string;
    name: string;
    updatedAt: string;
}
/**
 * A registry user account
 */
export interface Registryuser {
    createdAt: string;
    description: boolean;
    id: string;
    status: Registryuserstatus;
    updatedAt: string;
    username: string;
}
export declare enum Registryuserstatus {
    DELETING = "DELETING",
    DEPLOYING = "DEPLOYING",
    ERROR = "ERROR",
    OK = "OK"
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
export declare class CaasRegistry {
    private client;
    constructor(client: Client);
    /**
     * Operations about the DOCKER service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry#GET)
     */
    ListAvailableServices(): Promise<string[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D#GET)
     */
    InspectService(serviceName: string): Promise<Registryservice>;
    /**
     * Change the contacts of this service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/changeContact#POST)
     */
    LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces#POST)
     */
    CreateNamespace(serviceName: string, payload: RegistryinputNamespace): Promise<Registrynamespace>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces#GET)
     */
    ListNamespace(serviceName: string): Promise<string[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D#DELETE)
     */
    DeleteNamespace(namespaceId: string, serviceName: string): Promise<void>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D#GET)
     */
    InspectNamespace(namespaceId: string, serviceName: string): Promise<Registrynamespace>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images#GET)
     */
    ListAllImagesInNamespace(namespaceId: string, serviceName: string): Promise<string[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D#DELETE)
     */
    DeleteImage(imageId: string, namespaceId: string, serviceName: string): Promise<void>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D#GET)
     */
    InspectImage(imageId: string, namespaceId: string, serviceName: string): Promise<Registryimage>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D#PUT)
     */
    UpdateImage(imageId: string, namespaceId: string, serviceName: string, payload: RegistryinputImage): Promise<Registryimage>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/permissions#POST)
     */
    CreateImagePermissions(imageId: string, namespaceId: string, serviceName: string, payload: RegistryinputPermissions): Promise<Registrypermissions>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/permissions#GET)
     */
    ListImagePermissions(imageId: string, namespaceId: string, serviceName: string): Promise<string[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/permissions/%7BpermissionId%7D#DELETE)
     */
    DeleteImagePermissions(imageId: string, namespaceId: string, permissionId: string, serviceName: string): Promise<void>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/permissions/%7BpermissionId%7D#GET)
     */
    InspectImagePermissions(imageId: string, namespaceId: string, permissionId: string, serviceName: string): Promise<Registrypermissions>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/tags#GET)
     */
    ListImageTags(imageId: string, namespaceId: string, serviceName: string): Promise<string[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/tags/%7BtagId%7D#GET)
     */
    InspectImageTag(imageId: string, namespaceId: string, serviceName: string, tagId: string): Promise<Registrytag>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/permissions#POST)
     */
    CreateNamespacePermissions(namespaceId: string, serviceName: string, payload: RegistryinputPermissions): Promise<Registrypermissions>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/permissions#GET)
     */
    ListNamespacePermissions(namespaceId: string, serviceName: string): Promise<string[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/permissions/%7BpermissionId%7D#DELETE)
     */
    DeleteNamespacePermissions(namespaceId: string, permissionId: string, serviceName: string): Promise<void>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/permissions/%7BpermissionId%7D#GET)
     */
    InspectPermission(namespaceId: string, permissionId: string, serviceName: string): Promise<Registrypermissions>;
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/serviceInfos#GET)
     */
    GetThisObjectProperties(serviceName: string): Promise<ServicesService>;
    /**
     * Details about a Service [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/serviceInfos#PUT)
     */
    AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users#POST)
     */
    CreateUser(serviceName: string, payload: RegistryinputUser): Promise<Registryuser>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users#GET)
     */
    ListUsers(serviceName: string): Promise<string[]>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users/%7BuserId%7D#DELETE)
     */
    DeleteUser(serviceName: string, userId: string): Promise<void>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users/%7BuserId%7D#GET)
     */
    InspectUser(serviceName: string, userId: string): Promise<Registryuser>;
    /**
     * Missing description [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users/%7BuserId%7D/changePassword#POST)
     */
    UpdateUserPassword(serviceName: string, userId: string): Promise<Registryuser>;
}
//# sourceMappingURL=caas.registry.d.ts.map