// GENERATED SDK for caas/registry API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * An image stored in a namespace
 */
export interface Registryimage {
  createdAt: string
  id: string
  name: string
  public: boolean
  status: Registryimagestatus
  updatedAt: string
}

/*
 * The status of the image
 */
export enum Registryimagestatus {
  DELETING = 'DELETING',
  DEPLOYING = 'DEPLOYING',
  ERROR = 'ERROR',
  OK = 'OK'
}

/**
 * A container image
 */
export interface RegistryinputImage {
  public: boolean
}

/**
 * A namespace in which a user can either read, write or delete images
 */
export interface RegistryinputNamespace {
  name: string
}

/**
 * Permissions of a user over a namespace
 */
export interface RegistryinputPermissions {
  canRead: boolean
  canWrite: boolean
  isAdmin: boolean
  status: Registrypermissionstatus
  userId: string
}

/**
 * A registry user account
 */
export interface RegistryinputUser {
  description: string
}

/**
 * A namespace in which a user can either read, write or delete images
 */
export interface Registrynamespace {
  createdAt: string
  id: string
  name: string
  status: Registrynamespacestatus
  updatedAt: string
}

/*
 * The status of the namespace
 */
export enum Registrynamespacestatus {
  DELETING = 'DELETING',
  DEPLOYING = 'DEPLOYING',
  ERROR = 'ERROR',
  OK = 'OK'
}

/*
 * The status of the permission
 */
export enum Registrypermissionstatus {
  DELETING = 'DELETING',
  DEPLOYING = 'DEPLOYING',
  ERROR = 'ERROR',
  OK = 'OK'
}

/**
 * Permissions of a user over a namespace
 */
export interface Registrypermissions {
  canRead: boolean
  canWrite: boolean
  createdAt: string
  id: string
  isAdmin: boolean
  status: Registrypermissionstatus
  updatedAt: string
  userId: string
}

/**
 * The client subscription to the registry service
 */
export interface Registryservice {
  createdAt: string
  endpoint: string
  id: string
  maxNamespaces: number
  maxUsers: number
  updatedAt: string
  zone: string
}

/**
 * An image tag
 */
export interface Registrytag {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

/**
 * A registry user account
 */
export interface Registryuser {
  createdAt: string
  description: boolean
  id: string
  status: Registryuserstatus
  updatedAt: string
  username: string
}

/*
 * The status of the user
 */
export enum Registryuserstatus {
  DELETING = 'DELETING',
  DEPLOYING = 'DEPLOYING',
  ERROR = 'ERROR',
  OK = 'OK'
}

/*
 * Detailed renewal type of a service
 */
export enum ServiceRenewalType {
  AUTOMATICFORCEDPRODUCT = 'automaticForcedProduct',
  AUTOMATICV2012 = 'automaticV2012',
  AUTOMATICV2014 = 'automaticV2014',
  AUTOMATICV2016 = 'automaticV2016',
  MANUAL = 'manual',
  ONESHOT = 'oneShot',
  OPTION = 'option'
}

/**
 * Map a possible renew for a specific service
 */
export interface ServiceRenewType {
  automatic: boolean
  deleteAtExpiration: boolean
  forced: boolean
  manualPayment?: boolean
  period?: number
}

/*
 * 
 */
export enum ServiceState {
  EXPIRED = 'expired',
  INCREATION = 'inCreation',
  OK = 'ok',
  PENDINGDEBT = 'pendingDebt',
  UNPAID = 'unPaid'
}

/**
 * Details about a Service
 */
export interface ServicesService {
  canDeleteAtExpiration: boolean
  contactAdmin: string
  contactBilling: string
  contactTech: string
  creation: string
  domain: string
  engagedUpTo?: string
  expiration: string
  possibleRenewPeriod?: number[]
  renew?: ServiceRenewType
  renewalType: ServiceRenewalType
  serviceId: number
  status: ServiceState
}


export class CaasRegistry {
  constructor(private client: Client) {}

  /**
   * Operations about the DOCKER service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/caas/registry`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D#GET)
   */
  InspectService(serviceName: string): Promise<Registryservice> {
    let url = `/caas/registry/${serviceName}`

    return this.client.request<Registryservice>('GET', url)
  }

  /**
   * Change the contacts of this service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/caas/registry/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces#POST)
   */
  CreateNamespace(serviceName: string, payload: RegistryinputNamespace): Promise<Registrynamespace> {
    let url = `/caas/registry/${serviceName}/namespaces`

    return this.client.request<Registrynamespace>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces#GET)
   */
  ListNamespace(serviceName: string): Promise<string[]> {
    let url = `/caas/registry/${serviceName}/namespaces`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D#DELETE)
   */
  DeleteNamespace(namespaceId: string, serviceName: string): Promise<void> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D#GET)
   */
  InspectNamespace(namespaceId: string, serviceName: string): Promise<Registrynamespace> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}`

    return this.client.request<Registrynamespace>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images#GET)
   */
  ListAllImagesInNamespace(namespaceId: string, serviceName: string): Promise<string[]> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D#DELETE)
   */
  DeleteImage(imageId: string, namespaceId: string, serviceName: string): Promise<void> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D#GET)
   */
  InspectImage(imageId: string, namespaceId: string, serviceName: string): Promise<Registryimage> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}`

    return this.client.request<Registryimage>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D#PUT)
   */
  UpdateImage(imageId: string, namespaceId: string, serviceName: string, payload: RegistryinputImage): Promise<Registryimage> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}`

    return this.client.request<Registryimage>('PUT', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/permissions#POST)
   */
  CreateImagePermissions(imageId: string, namespaceId: string, serviceName: string, payload: RegistryinputPermissions): Promise<Registrypermissions> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/permissions`

    return this.client.request<Registrypermissions>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/permissions#GET)
   */
  ListImagePermissions(imageId: string, namespaceId: string, serviceName: string): Promise<string[]> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/permissions`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/permissions/%7BpermissionId%7D#DELETE)
   */
  DeleteImagePermissions(imageId: string, namespaceId: string, permissionId: string, serviceName: string): Promise<void> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/permissions/${permissionId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/permissions/%7BpermissionId%7D#GET)
   */
  InspectImagePermissions(imageId: string, namespaceId: string, permissionId: string, serviceName: string): Promise<Registrypermissions> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/permissions/${permissionId}`

    return this.client.request<Registrypermissions>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/tags#GET)
   */
  ListImageTags(imageId: string, namespaceId: string, serviceName: string): Promise<string[]> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/tags`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/images/%7BimageId%7D/tags/%7BtagId%7D#GET)
   */
  InspectImageTag(imageId: string, namespaceId: string, serviceName: string, tagId: string): Promise<Registrytag> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/images/${imageId}/tags/${tagId}`

    return this.client.request<Registrytag>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/permissions#POST)
   */
  CreateNamespacePermissions(namespaceId: string, serviceName: string, payload: RegistryinputPermissions): Promise<Registrypermissions> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/permissions`

    return this.client.request<Registrypermissions>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/permissions#GET)
   */
  ListNamespacePermissions(namespaceId: string, serviceName: string): Promise<string[]> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/permissions`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/permissions/%7BpermissionId%7D#DELETE)
   */
  DeleteNamespacePermissions(namespaceId: string, permissionId: string, serviceName: string): Promise<void> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/permissions/${permissionId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/namespaces/%7BnamespaceId%7D/permissions/%7BpermissionId%7D#GET)
   */
  InspectPermission(namespaceId: string, permissionId: string, serviceName: string): Promise<Registrypermissions> {
    let url = `/caas/registry/${serviceName}/namespaces/${namespaceId}/permissions/${permissionId}`

    return this.client.request<Registrypermissions>('GET', url)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/serviceInfos#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/caas/registry/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/caas/registry/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users#POST)
   */
  CreateUser(serviceName: string, payload: RegistryinputUser): Promise<Registryuser> {
    let url = `/caas/registry/${serviceName}/users`

    return this.client.request<Registryuser>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users#GET)
   */
  ListUsers(serviceName: string): Promise<string[]> {
    let url = `/caas/registry/${serviceName}/users`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users/%7BuserId%7D#DELETE)
   */
  DeleteUser(serviceName: string, userId: string): Promise<void> {
    let url = `/caas/registry/${serviceName}/users/${userId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users/%7BuserId%7D#GET)
   */
  InspectUser(serviceName: string, userId: string): Promise<Registryuser> {
    let url = `/caas/registry/${serviceName}/users/${userId}`

    return this.client.request<Registryuser>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/registry/%7BserviceName%7D/users/%7BuserId%7D/changePassword#POST)
   */
  UpdateUserPassword(serviceName: string, userId: string): Promise<Registryuser> {
    let url = `/caas/registry/${serviceName}/users/${userId}/changePassword`

    return this.client.request<Registryuser>('POST', url)
  }

}
