// GENERATED SDK for vrack API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * A numeric value tagged with its unit
 */
export interface ComplexTypeUnitAndValue<T> {
  unit: string
  value: T
}

/*
 * distincts MRTG period
 */
export enum DedicatedserverMrtgPeriod {
  DAILY = 'daily',
  HOURLY = 'hourly',
  MONTHLY = 'monthly',
  WEEKLY = 'weekly',
  YEARLY = 'yearly'
}

/**
 * A timestamp associated to a value
 */
export interface DedicatedserverMrtgTimestampValue {
  timestamp: number
  value?: any
}

/*
 * distincts MRTG type
 */
export enum DedicatedserverMrtgType {
  ERRORS_DOWNLOAD = 'errors:download',
  ERRORS_UPLOAD = 'errors:upload',
  PACKETS_DOWNLOAD = 'packets:download',
  PACKETS_UPLOAD = 'packets:upload',
  TRAFFIC_DOWNLOAD = 'traffic:download',
  TRAFFIC_UPLOAD = 'traffic:upload'
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
 * Details about a non-expiring Service
 */
export interface ServicesNonExpiringService {
  contactAdmin: string
  contactBilling: string
  contactTech: string
  creation: string
  domain: string
  serviceId: number
  status: ServiceState
}

/**
 * A structure giving all dedicated server interfaces allowed for this vrack
 */
export interface VrackAllowedDedicatedServerInterfaces {
  dedicatedServer: string
  dedicatedServerInterface: string
  name: string
}

/**
 * A structure given all service allowed for this vrack
 */
export interface VrackAllowedServices {
  cloudProject?: string[]
  dedicatedCloud?: string[]
  dedicatedCloudDatacenter?: string[]
  dedicatedConnect?: string[]
  dedicatedServer?: string[]
  dedicatedServerInterface?: VrackAllowedDedicatedServerInterfaces[]
  ip?: string[]
  ipLoadbalancing?: string[]
  legacyVrack?: string[]
}

/**
 * PublicCloud project in vrack
 */
export interface VrackcloudProject {
  project: string
  vrack: string
}

/**
 * vrack dedicated cloud interface
 */
export interface VrackdedicatedCloud {
  dedicatedCloud: string
  vlanId?: number
  vrack: string
}

/**
 * vrack dedicated connect interface
 */
export interface VrackdedicatedConnect {
  name: string
}

/**
 * vrack dedicated server interfaces
 */
export interface VrackdedicatedServer {
  dedicatedServer: string
  vrack: string
}

/**
 * vrack dedicated server interfaces
 */
export interface VrackdedicatedServerInterface {
  dedicatedServerInterface: string
  vrack: string
}

/**
 * IP block in vrack
 */
export interface Vrackip {
  gateway?: string
  ip: string
  zone?: VrackVrackZone
}

/**
 * ipLoadbalancing in vrack
 */
export interface Vrackiplb {
  ipLoadbalancing: string
  vrack: string
}

/**
 * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX)
 */
export interface VracklegacyVrack {
  legacyVrack: string
  vlanId: number
}

/**
 * vrack (1.5) nasha server interfaces
 */
export interface Vracknasha {
  serviceIp: string
  zpool: string
}

/**
 * vrack datacenter interface
 */
export interface VrackpccDatacenter {
  datacenter: string
  dedicatedCloud: string
  vrack: string
}

/**
 * A structure describing the public routing option
 */
export interface VrackpublicRoutingOption {
  bandwidth?: number
}

/**
 * vrack tasks
 */
export interface VrackTask {
  function: string
  id: number
  lastUpdate?: string
  orderId?: number
  serviceName?: string
  status: VrackTaskStatus
  targetDomain?: string
  todoDate?: string
}

/*
 * All states a vRack Task can be in
 */
export enum VrackTaskStatus {
  CANCELLED = 'cancelled',
  DOING = 'doing',
  DONE = 'done',
  INIT = 'init',
  TODO = 'todo'
}

/**
 * vrack
 */
export interface Vrackvrack {
  description: string
  name: string
}

/*
 * Possible values for vrack zone
 */
export enum VrackVrackZone {
  BHS = 'bhs',
  FRA1 = 'fra1',
  GRA = 'gra',
  LON1 = 'lon1',
  PDX1 = 'pdx1',
  RBX = 'rbx',
  SBG = 'sbg',
  SGP1 = 'sgp1',
  SYD1 = 'syd1',
  WAS1 = 'was1',
  WAW = 'waw'
}


export class Vrack {
  constructor(private client: Client) {}

  /**
   * Operations about the VRACK service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack#GET)
   */
  ListAvailableServices(): Promise<string[]> {
    let url = `/vrack`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * vrack [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D#GET)
   */
  GetThisObjectProperties(serviceName: string): Promise<Vrackvrack> {
    let url = `/vrack/${serviceName}`

    return this.client.request<Vrackvrack>('GET', url)
  }

  /**
   * vrack [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D#PUT)
   */
  AlterThisObjectProperties(serviceName: string, payload: Vrackvrack): Promise<void> {
    let url = `/vrack/${serviceName}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * allowedServices operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/allowedServices#GET)
   */
  ListAllServicesAllowedInThisVrack(serviceName: string): Promise<VrackAllowedServices> {
    let url = `/vrack/${serviceName}/allowedServices`

    return this.client.request<VrackAllowedServices>('GET', url)
  }

  /**
   * List the vrack.cloudProject objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/cloudProject#GET)
   */
  VrackForPublicCloudProject(serviceName: string): Promise<string[]> {
    let url = `/vrack/${serviceName}/cloudProject`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the vrack.cloudProject objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/cloudProject#POST)
   */
  AddAPublicCloudProjectToThisVrack(project: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/cloudProject`

    return this.client.request<VrackTask>('POST', url, {project})
  }

  /**
   * PublicCloud project in vrack [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/cloudProject/%7Bproject%7D#GET)
   */
  /*
  GetThisObjectProperties(project: string, serviceName: string): Promise<VrackcloudProject> {
    let url = `/vrack/${serviceName}/cloudProject/${project}`

    return this.client.request<VrackcloudProject>('GET', url)
  }
  */

  /**
   * PublicCloud project in vrack [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/cloudProject/%7Bproject%7D#DELETE)
   */
  RemoveThisPublicCloudProjectFromThisVrack(project: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/cloudProject/${project}`

    return this.client.request<VrackTask>('DELETE', url)
  }

  /**
   * List the vrack.dedicatedCloud objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloud#GET)
   */
  VrackDedicatedCloudVmNetwork(serviceName: string): Promise<string[]> {
    let url = `/vrack/${serviceName}/dedicatedCloud`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the vrack.dedicatedCloud objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloud#POST)
   */
  AddADedicatedCloudVmNetworkToThisVrack(dedicatedCloud: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/dedicatedCloud`

    return this.client.request<VrackTask>('POST', url, {dedicatedCloud})
  }

  /**
   * vrack dedicated cloud interface [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloud/%7BdedicatedCloud%7D#GET)
   */
  /*
  GetThisObjectProperties(dedicatedCloud: string, serviceName: string): Promise<VrackdedicatedCloud> {
    let url = `/vrack/${serviceName}/dedicatedCloud/${dedicatedCloud}`

    return this.client.request<VrackdedicatedCloud>('GET', url)
  }
  */

  /**
   * vrack dedicated cloud interface [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloud/%7BdedicatedCloud%7D#DELETE)
   */
  RemoveThisDedicatedCloudVmNetworkFromThisVrack(dedicatedCloud: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/dedicatedCloud/${dedicatedCloud}`

    return this.client.request<VrackTask>('DELETE', url)
  }

  /**
   * List the vrack.pccDatacenter objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloudDatacenter#GET)
   */
  VrackDedicatedCloudDatacenter(serviceName: string): Promise<string[]> {
    let url = `/vrack/${serviceName}/dedicatedCloudDatacenter`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * vrack datacenter interface [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloudDatacenter/%7Bdatacenter%7D#GET)
   */
  /*
  GetThisObjectProperties(datacenter: string, serviceName: string): Promise<VrackpccDatacenter> {
    let url = `/vrack/${serviceName}/dedicatedCloudDatacenter/${datacenter}`

    return this.client.request<VrackpccDatacenter>('GET', url)
  }
  */

  /**
   * allowedVrack operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloudDatacenter/%7Bdatacenter%7D/allowedVrack#GET)
   */
  VracksAllowedForYourDedicatedCloudDatacenter(datacenter: string, serviceName: string): Promise<string[]> {
    let url = `/vrack/${serviceName}/dedicatedCloudDatacenter/${datacenter}/allowedVrack`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * move operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedCloudDatacenter/%7Bdatacenter%7D/move#POST)
   */
  MoveYourDedicatedCloudDatacenterFromAVrackToAnother(datacenter: string, serviceName: string, targetServiceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/dedicatedCloudDatacenter/${datacenter}/move`

    return this.client.request<VrackTask>('POST', url, {targetServiceName})
  }

  /**
   * List the vrack.dedicatedConnect objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedConnect#GET)
   */
  VrackDedicatedConnect(serviceName: string): Promise<string[]> {
    let url = `/vrack/${serviceName}/dedicatedConnect`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * vrack dedicated connect interface [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedConnect/%7Bname%7D#GET)
   */
  /*
  GetThisObjectProperties(name: string, serviceName: string): Promise<VrackdedicatedConnect> {
    let url = `/vrack/${serviceName}/dedicatedConnect/${name}`

    return this.client.request<VrackdedicatedConnect>('GET', url)
  }
  */

  /**
   * vrack dedicated connect interface [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedConnect/%7Bname%7D#PUT)
   */
  /*
  AlterThisObjectProperties(name: string, serviceName: string, payload: VrackdedicatedConnect): Promise<void> {
    let url = `/vrack/${serviceName}/dedicatedConnect/${name}`

    return this.client.request<void>('PUT', url, payload)
  }
  */

  /**
   * List the vrack.dedicatedServer objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServer#GET)
   */
  VrackForDedicatedServer(serviceName: string): Promise<string[]> {
    let url = `/vrack/${serviceName}/dedicatedServer`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the vrack.dedicatedServer objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServer#POST)
   */
  AddADedicatedServerToThisVrack(dedicatedServer: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/dedicatedServer`

    return this.client.request<VrackTask>('POST', url, {dedicatedServer})
  }

  /**
   * vrack dedicated server interfaces [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServer/%7BdedicatedServer%7D#GET)
   */
  /*
  GetThisObjectProperties(dedicatedServer: string, serviceName: string): Promise<VrackdedicatedServer> {
    let url = `/vrack/${serviceName}/dedicatedServer/${dedicatedServer}`

    return this.client.request<VrackdedicatedServer>('GET', url)
  }
  */

  /**
   * vrack dedicated server interfaces [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServer/%7BdedicatedServer%7D#DELETE)
   */
  RemoveThisServerFromThisVrack(dedicatedServer: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/dedicatedServer/${dedicatedServer}`

    return this.client.request<VrackTask>('DELETE', url)
  }

  /**
   * mrtg operations [DEPRECATED]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServer/%7BdedicatedServer%7D/mrtg#GET)
   */
  RetrieveVrackTrafficGraphValues(dedicatedServer: string, period: DedicatedserverMrtgPeriod, serviceName: string, type: DedicatedserverMrtgType): Promise<DedicatedserverMrtgTimestampValue[]> {
    let url = `/vrack/${serviceName}/dedicatedServer/${dedicatedServer}/mrtg?`

    const queryParams = new QueryParams()
    if (period) { queryParams.set('period', period.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<DedicatedserverMrtgTimestampValue[]>('GET', url+queryParams.toString())
  }

  /**
   * List the vrack.dedicatedServerInterface objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServerInterface#GET)
   */
  VrackForDedicatedServerInterface(serviceName: string): Promise<string[]> {
    let url = `/vrack/${serviceName}/dedicatedServerInterface`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the vrack.dedicatedServerInterface objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServerInterface#POST)
   */
  AddADedicatedServerInterfaceToThisVrack(dedicatedServerInterface: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/dedicatedServerInterface`

    return this.client.request<VrackTask>('POST', url, {dedicatedServerInterface})
  }

  /**
   * vrack dedicated server interfaces [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServerInterface/%7BdedicatedServerInterface%7D#GET)
   */
  /*
  GetThisObjectProperties(dedicatedServerInterface: string, serviceName: string): Promise<VrackdedicatedServerInterface> {
    let url = `/vrack/${serviceName}/dedicatedServerInterface/${dedicatedServerInterface}`

    return this.client.request<VrackdedicatedServerInterface>('GET', url)
  }
  */

  /**
   * vrack dedicated server interfaces [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServerInterface/%7BdedicatedServerInterface%7D#DELETE)
   */
  RemoveThisServerInterfaceFromThisVrack(dedicatedServerInterface: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/dedicatedServerInterface/${dedicatedServerInterface}`

    return this.client.request<VrackTask>('DELETE', url)
  }

  /**
   * dedicatedServerInterfaceDetails operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/dedicatedServerInterfaceDetails#GET)
   */
  DetailsForAllDedicatedServerInterfacesInThisVrack(serviceName: string): Promise<VrackAllowedDedicatedServerInterfaces[]> {
    let url = `/vrack/${serviceName}/dedicatedServerInterfaceDetails`

    return this.client.request<VrackAllowedDedicatedServerInterfaces[]>('GET', url)
  }

  /**
   * List the vrack.ip objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ip#GET)
   */
  VrackForIPBlocks(serviceName: string): Promise<string[]> {
    let url = `/vrack/${serviceName}/ip`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the vrack.ip objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ip#POST)
   */
  AddAnIPBlockToThisVrack(block: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/ip`

    return this.client.request<VrackTask>('POST', url, {block})
  }

  /**
   * IP block in vrack [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ip/%7Bip%7D#GET)
   */
  /*
  GetThisObjectProperties(ip: string, serviceName: string): Promise<Vrackip> {
    let url = `/vrack/${serviceName}/ip/${ip}`

    return this.client.request<Vrackip>('GET', url)
  }
  */

  /**
   * IP block in vrack [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ip/%7Bip%7D#DELETE)
   */
  RemoveThisIPBlockFromThisVrack(ip: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/ip/${ip}`

    return this.client.request<VrackTask>('DELETE', url)
  }

  /**
   * announceInZone operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ip/%7Bip%7D/announceInZone#POST)
   */
  AnnounceIPToZoneForVrack(ip: string, serviceName: string, zone: VrackVrackZone): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/ip/${ip}/announceInZone`

    return this.client.request<VrackTask>('POST', url, {zone})
  }

  /**
   * availableZone operations [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ip/%7Bip%7D/availableZone#GET)
   */
  ZoneAvailableToAnnounceYourBlock(ip: string, serviceName: string): Promise<VrackVrackZoneEnum[]> {
    let url = `/vrack/${serviceName}/ip/${ip}/availableZone`

    return this.client.request<VrackVrackZoneEnum[]>('GET', url)
  }

  /**
   * List the vrack.iplb objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ipLoadbalancing#GET)
   */
  VrackForIpLoadbalancing(serviceName: string): Promise<string[]> {
    let url = `/vrack/${serviceName}/ipLoadbalancing`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the vrack.iplb objects [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ipLoadbalancing#POST)
   */
  AddAnIpLoadbalancingToThisVrack(ipLoadbalancing: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/ipLoadbalancing`

    return this.client.request<VrackTask>('POST', url, {ipLoadbalancing})
  }

  /**
   * ipLoadbalancing in vrack [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ipLoadbalancing/%7BipLoadbalancing%7D#GET)
   */
  /*
  GetThisObjectProperties(ipLoadbalancing: string, serviceName: string): Promise<Vrackiplb> {
    let url = `/vrack/${serviceName}/ipLoadbalancing/${ipLoadbalancing}`

    return this.client.request<Vrackiplb>('GET', url)
  }
  */

  /**
   * ipLoadbalancing in vrack [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/ipLoadbalancing/%7BipLoadbalancing%7D#DELETE)
   */
  RemoveThisIpLoadbalancingFromThisVrack(ipLoadbalancing: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/ipLoadbalancing/${ipLoadbalancing}`

    return this.client.request<VrackTask>('DELETE', url)
  }

  /**
   * List the vrack.legacyVrack objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/legacyVrack#GET)
   */
  VrackForLegacyVrack(serviceName: string): Promise<string[]> {
    let url = `/vrack/${serviceName}/legacyVrack`

    return this.client.request<string[]>('GET', url)
  }

  /**
   * List the vrack.legacyVrack objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/legacyVrack#POST)
   */
  AddALegacyVrackVrackXXXXToThisVrackPnXXXX(legacyVrack: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/legacyVrack`

    return this.client.request<VrackTask>('POST', url, {legacyVrack})
  }

  /**
   * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX) [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/legacyVrack/%7BlegacyVrack%7D#GET)
   */
  /*
  GetThisObjectProperties(legacyVrack: string, serviceName: string): Promise<VracklegacyVrack> {
    let url = `/vrack/${serviceName}/legacyVrack/${legacyVrack}`

    return this.client.request<VracklegacyVrack>('GET', url)
  }
  */

  /**
   * interface between legacy vrack (vrackXXXX) and vrack (pn-XXXX) [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/legacyVrack/%7BlegacyVrack%7D#DELETE)
   */
  RemoveThisLegacyVrackVrackXXXXFromThisVrackPnXXXX(legacyVrack: string, serviceName: string): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/legacyVrack/${legacyVrack}`

    return this.client.request<VrackTask>('DELETE', url)
  }

  /**
   * Details about a non-expiring Service [BETA]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/serviceInfos#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string): Promise<ServicesNonExpiringService> {
    let url = `/vrack/${serviceName}/serviceInfos`

    return this.client.request<ServicesNonExpiringService>('GET', url)
  }
  */

  /**
   * List the vrack.Task objects [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/task#GET)
   */
  VrackTasks(serviceName: string): Promise<number[]> {
    let url = `/vrack/${serviceName}/task`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * vrack tasks [PRODUCTION]
  * [WARN] This API action is not ready (duplicate name)
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/vrack/%7BserviceName%7D/task/%7BtaskId%7D#GET)
   */
  /*
  GetThisObjectProperties(serviceName: string, taskId: number): Promise<VrackTask> {
    let url = `/vrack/${serviceName}/task/${taskId}`

    return this.client.request<VrackTask>('GET', url)
  }
  */

}
