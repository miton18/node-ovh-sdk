// GENERATED SDK for cdn/dedicated API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Anycast IP of a CDN customer
 */
export interface CdnanycastAnycast {
  anycast: string
  backendLimit: number
  backendUse: number
  cacheRuleLimitPerDomain: number
  lastQuotaOrder?: string
  logUrl: string
  offer?: string
  quota: number
  service: string
}

/**
 * Backend for a domain
 */
export interface CdnanycastBackend {
  ip: string
}

/**
 * CacheRules for a domain
 */
export interface CdnanycastCacheRule {
  cacheRuleId: number
  cacheType: CdnanycastCacheRuleCacheType
  domain: string
  fileMatch: string
  fileType: CdnanycastCacheRuleFileType
  status: CdnanycastCacheRuleStatus
  ttl: number
}

/*
 * All type a cache can be in
 */
export enum CdnanycastCacheRuleCacheType {
  FORCECACHE = 'forceCache',
  NOCACHE = 'noCache'
}

/*
 * All states an anycast pool can be in
 */
export enum CdnanycastCacheRuleFileType {
  EXTENSION = 'extension',
  FILE = 'file',
  FOLDER = 'folder'
}

/*
 * All states a status can be in
 */
export enum CdnanycastCacheRuleStatus {
  CREATING = 'creating',
  DELETING = 'deleting',
  ERROR = 'error',
  OFF = 'off',
  ON = 'on',
  UPDATING = 'updating'
}

/**
 * Domain on CDN
 */
export interface CdnanycastDomain {
  cacheRuleUse: number
  cname: string
  domain: string
  status: CdnanycastDomainStatus
  type: CdnanycastDomainType
}

/*
 * All states a status can be in
 */
export enum CdnanycastDomainStatus {
  ERROR = 'error',
  OFF = 'off',
  ON = 'on',
  REMOVING = 'removing'
}

/*
 * All type of Domain
 */
export enum CdnanycastDomainType {
  PLAIN = 'plain',
  SSL = 'ssl'
}

/**
 * URL to real time logs
 */
export interface CdnanycastLogsURL {
  expirationDate: string
  url: string
}

/**
 * CDN Pop
 */
export interface CdnanycastPop {
  city: string
  comment: string
  name: string
  status: CdnanycastPopStatus
}

/*
 * All Pop status
 */
export enum CdnanycastPopStatus {
  DOWN = 'down',
  OK = 'ok',
  REROUTED = 'rerouted',
  UNKNOWN = 'unknown'
}

/**
 * CDN Ssl
 */
export interface CdnanycastSsl {
  certificateProvider: string
  certificateValidFrom?: string
  certificateValidTo?: string
  cn?: string
  name: string
  status: CdnanycastSslState
}

/*
 * All states a CDN SSL can be in
 */
export enum CdnanycastSslState {
  CHECKING = 'checking',
  CREATING = 'creating',
  ERROR = 'error',
  OFF = 'off',
  ON = 'on',
  REMOVING = 'removing',
  UPDATING = 'updating',
  UPLOADING = 'uploading'
}

/**
 * A structure describing type of a stats hash
 */
export interface CdnanycastStatsDataType {
  date: string
  value?: number
}

/*
 * Period of the statistics
 */
export enum CdnanycastStatsPeriod {
  DAY = 'day',
  MONTH = 'month',
  WEEK = 'week'
}

/*
 * Type of statistics related to cache
 */
export enum CdnanycastStatsType {
  BACKEND = 'backend',
  CDN = 'cdn',
  THREAT = 'threat'
}

/*
 * Value bandwidth or request
 */
export enum CdnanycastStatsValue {
  BANDWIDTH = 'bandwidth',
  REQUEST = 'request'
}

/**
 * Task on a CDN
 */
export interface CdnanycastTask {
  comment?: string
  function: CdnanycastTaskFunction
  status: CdnanycastTaskState
  taskId: number
}

/*
 * All function CDN task can be
 */
export enum CdnanycastTaskFunction {
  FLUSH = 'flush',
  FLUSHALL = 'flushAll',
  GENERATESSL = 'generateSsl',
  INSTALLSSL = 'installSsl',
  REINSTALLSSL = 'reinstallSsl',
  REMOVEDOMAIN = 'removeDomain',
  UNINSTALLSSL = 'uninstallSsl',
  UPDATECACHERULE = 'updateCacheRule'
}

/*
 * All states a CDN task can be in
 */
export enum CdnanycastTaskState {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  ERROR = 'error',
  TODO = 'todo'
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


export class CdnDedicated {
  constructor(private client: Client) {}

  /**
   * Operations about the CDNANYCAST service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/cdn/dedicated`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * Anycast IP of a CDN customer [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<CdnanycastAnycast> {
    let url = `/cdn/dedicated/${serviceName}`

    return this.client.request<CdnanycastAnycast>('GET', url)
  }

  /**
   * Change the contacts of this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/changeContact#POST)
   */
  LaunchAContactChangeProcedure(serviceName: string, contactAdmin?: string, contactBilling?: string, contactTech?: string): Promise<number[]> {
    let url = `/cdn/dedicated/${serviceName}/changeContact`

    return this.client.request<number[]>('POST', url, {contactAdmin, contactBilling, contactTech})
  }

  /**
   * List the cdnanycast.Domain objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains#GET)
   */
  DomainsAssociatedToThisAnycast(serviceName: string): Promise<string[]> {
    let url = `/cdn/dedicated/${serviceName}/domains`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the cdnanycast.Domain objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains#POST)
   */
  AddADomainOnCDN(domain: string, serviceName: string): Promise<CdnanycastDomain> {
    let url = `/cdn/dedicated/${serviceName}/domains`

    return this.client.request<CdnanycastDomain>('POST', url, {domain})
  }

  /**
   * Domain on CDN [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, serviceName: string): Promise<CdnanycastDomain> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}`

    return this.client.request<CdnanycastDomain>('GET', url)
  }
  */

  /**
   * Domain on CDN [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D#PUT)
   */
  AlterThisObjectProperties(domain: string, serviceName: string, payload: CdnanycastDomain): Promise<void> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Domain on CDN [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D#DELETE)
   */
  RemoveADomainFromTheCDN(domain: string, serviceName: string): Promise<CdnanycastTask> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}`

    return this.client.request<CdnanycastTask>('DELETE', url)
  }

  /**
   * List the cdnanycast.Backend objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/backends#GET)
   */
  BackendAssociatedToTheDomain(domain: string, serviceName: string): Promise<string[]> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/backends`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the cdnanycast.Backend objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/backends#POST)
   */
  AddABackendIP(domain: string, ip: string, serviceName: string): Promise<CdnanycastBackend> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/backends`

    return this.client.request<CdnanycastBackend>('POST', url, {ip})
  }

  /**
   * Backend for a domain [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/backends/%7Bip%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, ip: string, serviceName: string): Promise<CdnanycastBackend> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/backends/${ip}`

    return this.client.request<CdnanycastBackend>('GET', url)
  }
  */

  /**
   * Backend for a domain [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/backends/%7Bip%7D#DELETE)
   */
  RemoveABackendIP(domain: string, ip: string, serviceName: string): Promise<string> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/backends/${ip}`

    return this.client.request<string>('DELETE', url)
  }

  /**
   * List the cdnanycast.CacheRule objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules#GET)
   */
  CacheRulesAssociatedToTheDomain(domain: string, serviceName: string, fileMatch?: string): Promise<number[]> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules?`

    const queryParams = new QueryParams()
    if (fileMatch) { queryParams.set('fileMatch', fileMatch) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * List the cdnanycast.CacheRule objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules#POST)
   */
  AddACacheRuleToADomain(cacheType: CdnanycastCacheRuleCacheType, domain: string, fileMatch: string, fileType: CdnanycastCacheRuleFileType, serviceName: string, ttl: number): Promise<CdnanycastCacheRule> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules`

    return this.client.request<CdnanycastCacheRule>('POST', url, {cacheType, fileMatch, fileType, ttl})
  }

  /**
   * CacheRules for a domain [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D#GET)
   */
  /*
  GetThisObjectProperties(cacheRuleId: number, domain: string, serviceName: string): Promise<CdnanycastCacheRule> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}`

    return this.client.request<CdnanycastCacheRule>('GET', url)
  }
  */

  /**
   * CacheRules for a domain [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D#PUT)
   */
  /*
  AlterThisObjectProperties(cacheRuleId: number, domain: string, serviceName: string, payload: CdnanycastCacheRule): Promise<void> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * CacheRules for a domain [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D#DELETE)
   */
  RemoveCacheRule(cacheRuleId: number, domain: string, serviceName: string): Promise<CdnanycastTask> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}`

    return this.client.request<CdnanycastTask>('DELETE', url)
  }

  /**
   * flush operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D/flush#POST)
   */
  FlushTheCache(cacheRuleId: number, domain: string, serviceName: string): Promise<CdnanycastTask> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}/flush`

    return this.client.request<CdnanycastTask>('POST', url)
  }

  /**
   * List the cdnanycast.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D/tasks#GET)
   */
  TaskAssociatedToTheCacheRule(cacheRuleId: number, domain: string, serviceName: string): Promise<number[]> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}/tasks`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Task on a CDN [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/cacheRules/%7BcacheRuleId%7D/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(cacheRuleId: number, domain: string, serviceName: string, taskId: number): Promise<CdnanycastTask> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules/${cacheRuleId}/tasks/${taskId}`

    return this.client.request<CdnanycastTask>('GET', url)
  }
  */

  /**
   * flush operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/flush#POST)
   */
  FlushAllCache(domain: string, serviceName: string): Promise<CdnanycastTask> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/flush`

    return this.client.request<CdnanycastTask>('POST', url)
  }

  /**
   * logs operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/logs#POST)
   */
  GenerateURLToRealTimeLogs(domain: string, serviceName: string): Promise<CdnanycastLogsURL> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/logs`

    return this.client.request<CdnanycastLogsURL>('POST', url)
  }

  /**
   * statistics operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/statistics#GET)
   */
  ReturnStatsAboutADomain(domain: string, period: CdnanycastStatsPeriod, serviceName: string, type: CdnanycastStatsType, value: CdnanycastStatsValue): Promise<CdnanycastStatsDataType[]> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/statistics?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }
    if (value) { queryParams.set('value', value.toString()) }

    return this.client.request<CdnanycastStatsDataType[]>('GET', url+queryParams.toString())
  }

  /**
   * List the cdnanycast.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/tasks#GET)
   */
  TaskAssociatedToTheDomain(domain: string, serviceName: string): Promise<number[]> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/tasks`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Task on a CDN [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/domains/%7Bdomain%7D/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(domain: string, serviceName: string, taskId: number): Promise<CdnanycastTask> {
    let url = `/cdn/dedicated/${serviceName}/domains/${domain}/tasks/${taskId}`

    return this.client.request<CdnanycastTask>('GET', url)
  }
  */

  /**
   * logs operations [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/logs#POST)
   */
  /*
  GenerateURLToRealTimeLogs(serviceName: string): Promise<CdnanycastLogsURL> {
    let url = `/cdn/dedicated/${serviceName}/logs`

    return this.client.request<CdnanycastLogsURL>('POST', url)
  }
  */

  /**
   * quota operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/quota#GET)
   */
  ReturnQuotaHistory(period: CdnanycastStatsPeriod, serviceName: string): Promise<CdnanycastStatsDataType[]> {
    let url = `/cdn/dedicated/${serviceName}/quota?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }

    return this.client.request<CdnanycastStatsDataType[]>('GET', url+queryParams.toString())
  }

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesService> {
    let url = `/cdn/dedicated/${serviceName}/serviceInfos`

    return this.client.request<ServicesService>('GET', url)
  }
  */

  /**
   * Details about a Service [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/serviceInfos#PUT)
   */
  /*
  AlterThisObjectProperties(serviceName: string, payload: ServicesService): Promise<void> {
    let url = `/cdn/dedicated/${serviceName}/serviceInfos`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * CDN Ssl [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<CdnanycastSsl> {
    let url = `/cdn/dedicated/${serviceName}/ssl`

    return this.client.request<CdnanycastSsl>('GET', url)
  }
  */

  /**
   * CDN Ssl [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl#POST)
   */
  AddASSLOnCDNOrGenerateALetsEncryptCertificate(name: string, serviceName: string, certificate?: string, chain?: string, key?: string): Promise<CdnanycastSsl> {
    let url = `/cdn/dedicated/${serviceName}/ssl`

    return this.client.request<CdnanycastSsl>('POST', url, {name, certificate, chain, key})
  }

  /**
   * CDN Ssl [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl#DELETE)
   */
  RemoveSSLOfTheCDN(serviceName: string): Promise<CdnanycastTask> {
    let url = `/cdn/dedicated/${serviceName}/ssl`

    return this.client.request<CdnanycastTask>('DELETE', url)
  }

  /**
   * List the cdnanycast.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl/tasks#GET)
   */
  TaskAssociatedToTheSsl(serviceName: string, _function?: CdnanycastTaskFunction, status?: CdnanycastTaskState): Promise<number[]> {
    let url = `/cdn/dedicated/${serviceName}/ssl/tasks?`

    const queryParams = new QueryParams()
    if (_function) { queryParams.set('function', _function.toString()) }
    if (status) { queryParams.set('status', status.toString()) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Task on a CDN [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl/tasks/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<CdnanycastTask> {
    let url = `/cdn/dedicated/${serviceName}/ssl/tasks/${taskId}`

    return this.client.request<CdnanycastTask>('GET', url)
  }
  */

  /**
   * update operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/%7BserviceName%7D/ssl/update#POST)
   */
  UpdateAnExistingSSLWithACustomCertificate(certificate: string, key: string, serviceName: string, chain?: string): Promise<CdnanycastTask> {
    let url = `/cdn/dedicated/${serviceName}/ssl/update`

    return this.client.request<CdnanycastTask>('POST', url, {certificate, key, chain})
  }

  /**
   * List the cdnanycast.Pop objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/pops#GET)
   */
  ListOfCDNPops(): Promise<string[]> {
    let url = `/cdn/dedicated/pops`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * CDN Pop [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/cdn/dedicated/pops/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(name: string): Promise<CdnanycastPop> {
    let url = `/cdn/dedicated/pops/${name}`

    return this.client.request<CdnanycastPop>('GET', url)
  }
  */

}
