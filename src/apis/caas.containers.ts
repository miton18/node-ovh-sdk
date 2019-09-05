// GENERATED SDK for caas/containers API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * The new framework password
 */
export interface Dockerframeworkpassword {
  password: string
}

/**
 * A host on which containers can be deployed
 */
export interface Dockerslave {
  createdAt: string
  flavorId: string
  id: string
  metrics: Dockerslavemetrics
  name: string
  region: string
  stack: string
  state: Dockerslavestatus
  updatedAt: string
}

/**
 * Attributes of the slave flavor
 */
export interface Dockerslaveflavor {
  bandwidth: number
  cpus: number
  disk: number
  diskHa: boolean
  id: string
  isVm: boolean
  ram: number
}

/**
 * Application data
 */
export interface Dockerslaveframeworkapp {
  cpu?: number
  env: Dockerslaveframeworkappenvironment[]
  id?: string
  image?: string
  instances?: number
  mem?: number
  ports: Dockerslaveframeworkappport[]
  status?: string
  volumes: Dockerslaveframeworkappvolume[]
}

/**
 * Application environment variable
 */
export interface Dockerslaveframeworkappenvironment {
  key?: string
  value?: string
}

/**
 * Application ports
 */
export interface Dockerslaveframeworkappport {
  containerPort?: number
  hostPort?: number
  protocol?: string
}

/**
 * Application volumes
 */
export interface Dockerslaveframeworkappvolume {
  containerPath?: number
  hostPath?: number
  mode?: string
}

/**
 * Metrics about slave usage
 */
export interface Dockerslavemetrics {
  resources: Dockerslavemetricsresources
  usedResources: DockerslavemetricsusedResources
}

/**
 * Metrics about available slave resources
 */
export interface Dockerslavemetricsresources {
  cpu?: number
  mem?: number
}

/**
 * Metrics about used slave resources
 */
export interface DockerslavemetricsusedResources {
  cpu?: number
  mem?: number
}

/*
 * The state of the slave
 */
export enum Dockerslavestatus {
  BLOCKED = 'blocked',
  CREATED = 'created',
  CREATING = 'creating'
}

/**
 * An isolated client Docker PaaS environment
 */
export interface Dockerstack {
  cluster?: string
  createdAt: string
  loadBalancer: string
  metrics: Dockerslavemetrics
  name: string
  slaves: string[]
  updatedAt: string
}

/**
 * A custom SSL certificate associated to a Docker PaaS environment
 */
export interface DockerstackcustomSsl {
  certificate: string
  createdAt: string
  updatedAt: string
}

/**
 * Action validation message
 */
export interface DockerstackcustomSslMessage {
  message: string
}

/**
 * A custom SSL certificate associated to a Docker PaaS environment
 */
export interface DockerstackinputCustomSsl {
  certificate: string
  key: string
}

/**
 * Credentials providing authentication to an external registry
 */
export interface DockerstackregistryCredentials {
  createdAt: string
  registryUrl: string
  updatedAt: string
  username: string
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

/**
 * A framework installed for a docker PaaS stack
 */
export interface Stackframework {
  accessUrl: string
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

/**
 * Application deployed on the framework
 */
export interface Stackframeworkapplication {
  apps: Dockerslaveframeworkapp[]
}


export class CaasContainers {
  constructor(private client: Client) {}

  /**
   * Operations about the DOCKER service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/caas/containers`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D#GET)
   */
  InspectTheArgumentStack(serviceName: string): Promise<Dockerstack> {
    let url = `/caas/containers/${serviceName}`

    return this.client.request<Dockerstack>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/availableFrameworks#GET)
   */
  ListAllTheInstallableMesosFrameworks(serviceName: string): Promise<string[]> {
    let url = `/caas/containers/${serviceName}/availableFrameworks`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Change the contacts of this service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/caas/containers/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/frameworks#GET)
   */
  ListTheFrameworksInstalledOnTheArgumentStack(serviceName: string): Promise<string[]> {
    let url = `/caas/containers/${serviceName}/frameworks`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/frameworks/%7BframeworkId%7D#GET)
   */
  InspectTheStackFramework(frameworkId: string, serviceName: string): Promise<Stackframework> {
    let url = `/caas/containers/${serviceName}/frameworks/${frameworkId}`

    return this.client.request<Stackframework>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/frameworks/%7BframeworkId%7D/apps#GET)
   */
  ListAppsInTheFramework(frameworkId: string, serviceName: string): Promise<Stackframeworkapplication> {
    let url = `/caas/containers/${serviceName}/frameworks/${frameworkId}/apps`

    return this.client.request<Stackframeworkapplication>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/frameworks/%7BframeworkId%7D/password#PUT)
   */
  UpdateTheFrameworkAccessPassword(frameworkId: string, serviceName: string, payload: Dockerframeworkpassword): Promise<void> {
    let url = `/caas/containers/${serviceName}/frameworks/${frameworkId}/password`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials#POST)
   */
  AssociateTheStackWithSomeCredentialsToAnAuthenticatedRegistry(serviceName: string, payload: DockerstackinputCustomSsl): Promise<DockerstackregistryCredentials> {
    let url = `/caas/containers/${serviceName}/registry/credentials`

    return this.client.request<DockerstackregistryCredentials>('POST', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials#GET)
   */
  ListTheRegistryCredentialsAssociatedToTheStack(serviceName: string): Promise<string[]> {
    let url = `/caas/containers/${serviceName}/registry/credentials`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials/%7BcredentialsId%7D#PUT)
   */
  UpdateTheRegistryCredentials(credentialsId: string, serviceName: string, payload: DockerstackinputCustomSsl): Promise<DockerstackregistryCredentials> {
    let url = `/caas/containers/${serviceName}/registry/credentials/${credentialsId}`

    return this.client.request<DockerstackregistryCredentials>('PUT', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials/%7BcredentialsId%7D#GET)
   */
  InspectTheImageRegistryCredentialsAssociatedToTheStack(credentialsId: string, serviceName: string): Promise<DockerstackregistryCredentials> {
    let url = `/caas/containers/${serviceName}/registry/credentials/${credentialsId}`

    return this.client.request<DockerstackregistryCredentials>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/registry/credentials/%7BcredentialsId%7D#DELETE)
   */
  DeleteTheRegistryCredentials(credentialsId: string, serviceName: string): Promise<void> {
    let url = `/caas/containers/${serviceName}/registry/credentials/${credentialsId}`

    return this.client.request<void>('DELETE', url)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/serviceInfos#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/caas/containers/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/caas/containers/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/slaves#GET)
   */
  ListTheIdOfTheRegisteredSlaveInstances(serviceName: string): Promise<string[]> {
    let url = `/caas/containers/${serviceName}/slaves`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/slaves/%7BslaveId%7D#GET)
   */
  InspectTheArgumentUserSlaveInstance(serviceName: string, slaveId: string): Promise<Dockerslave> {
    let url = `/caas/containers/${serviceName}/slaves/${slaveId}`

    return this.client.request<Dockerslave>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/ssl#PUT)
   */
  UpdateTheCustomSSLCertificateAndPrivate(serviceName: string, payload: DockerstackinputCustomSsl): Promise<DockerstackcustomSslMessage> {
    let url = `/caas/containers/${serviceName}/ssl`

    return this.client.request<DockerstackcustomSslMessage>('PUT', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/ssl#DELETE)
   */
  DeleteTheCustomSSLCertificateAndPrivateKeyAssociatedToTheStack(serviceName: string): Promise<DockerstackcustomSslMessage> {
    let url = `/caas/containers/${serviceName}/ssl`

    return this.client.request<DockerstackcustomSslMessage>('DELETE', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/%7BserviceName%7D/ssl#GET)
   */
  InspectTheCustomSSLCertificateAndPrivate(serviceName: string): Promise<DockerstackcustomSsl> {
    let url = `/caas/containers/${serviceName}/ssl`

    return this.client.request<DockerstackcustomSsl>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/slaves/flavors#GET)
   */
  ListTheCloudFlavorsAvailableForTheDockerPaaSSlaves(): Promise<string[]> {
    let url = `/caas/containers/slaves/flavors`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/caas/containers/slaves/flavors/%7BflavorId%7D#GET)
   */
  InspectTheArgumentSlaveFlavor(flavorId: string): Promise<Dockerslaveflavor> {
    let url = `/caas/containers/slaves/flavors/${flavorId}`

    return this.client.request<Dockerslaveflavor>('GET', url)
  }

}
