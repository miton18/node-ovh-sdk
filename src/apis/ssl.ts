// GENERATED SDK for ssl API

import {Client} from '../client'
import QueryParams from '../query-params'

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
 * Certificate of an SSL customer
 */
export interface SslCertificate {
  authority: SslCertificateAuthority
  certificate?: string
  chain?: string
  commonName: string
  csr: string
  serviceName: string
  status: SslCertificateStatus
  subjectAltName: string[]
  type: SslCertificateType
  validityEnd?: string
  validityStart?: string
}

/*
 * All authority a SSL certificate can be issued from
 */
export enum SslCertificateAuthority {
  COMODO = 'comodo',
  SECTIGO = 'sectigo'
}

/*
 * All status a SSL certificate can be in
 */
export enum SslCertificateStatus {
  CREATING = 'creating',
  ERROR = 'error',
  OK = 'ok',
  VALIDATING = 'validating'
}

/*
 * All type a SSL certificate can be
 */
export enum SslCertificateType {
  DV = 'DV',
  EV = 'EV',
  OV = 'OV'
}

/**
 * Task on a SSL
 */
export interface SslOperation {
  doneDate?: string
  function: SslOperationFunction
  lastUpdate: string
  startDate: string
  status: SslOperationStatus
  taskId: number
}

/*
 * All functions a SSL operation can handle
 */
export enum SslOperationFunction {
  CREATECERTIFICATE = 'createCertificate'
}

/*
 * All status a SSL operation can be in
 */
export enum SslOperationStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
}


export class Ssl {
  constructor(private client: Client) {}

  /**
   * Operations about the SSL service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/ssl`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Certificate of an SSL customer [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<SslCertificate> {
    let url = `/ssl/${serviceName}`

    return this.client.request<SslCertificate>('GET', url)
  }

  /**
   * Details about a Service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/ssl/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl/%7BserviceName%7D/serviceInfos#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/ssl/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * List the ssl.Operation objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl/%7BserviceName%7D/tasks#GET)
   */
  TasksAssociatedToThisSsl(serviceName: string): Promise<number[]> {
    let url = `/ssl/${serviceName}/tasks`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Task on a SSL [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/ssl/%7BserviceName%7D/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<SslOperation> {
    let url = `/ssl/${serviceName}/tasks/${taskId}`

    return this.client.request<SslOperation>('GET', url)
  }
  */

}
