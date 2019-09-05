// GENERATED SDK for status API

import {Client} from '../client'
import QueryParams from '../query-params'

/*
 * Description not available
 */
export enum OvhstatustaskTaskImpact {
  PARTIALUNAVAILABILITY = 'partialUnavailability',
  FULLUNAVAILABILITY = 'fullUnavailability',
  DOWNTIME = 'downtime',
  NONE = 'none',
  UNKNOWN = 'unknown'
}

/*
 * Description not available
 */
export enum OvhstatustaskTaskStatus {
  PLANNED = 'planned',
  INPROGRESS = 'inProgress',
  FINISHED = 'finished'
}

/*
 * Description not available
 */
export enum OvhstatustaskTaskType {
  INCIDENT = 'incident',
  MAINTENANCE = 'maintenance',
  UPGRADE = 'upgrade'
}

/**
 * A reply is useful to know the progress of a task
 */
export interface StatusReply {
  comment: string
  date: string
}

/**
 * A task linked to one of your services
 */
export interface StatusTask {
  category: string
  endDate?: string
  impact: OvhstatustaskTaskImpact
  impactedService: string
  progress: number
  project: string
  reference: string
  replies: StatusReply[]
  startDate?: string
  status: OvhstatustaskTaskStatus
  title: string
  type: OvhstatustaskTaskType
  uuid: string
}


export class Status {
  constructor(private client: Client) {}

  /**
   * API to get incidents or maintenances linked to nichandle services [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/status/task#GET)
   */
  FindAllTheIncidentsOrMaintenancesLinkedToYourServices(impact?: OvhstatustaskTaskImpact, status?: OvhstatustaskTaskStatus, type?: OvhstatustaskTaskType): Promise<StatusTask[]> {
    let url = `/status/task?`

    const queryParams = new QueryParams()
    if (impact) { queryParams.set('impact', impact.toString()) }
    if (status) { queryParams.set('status', status.toString()) }
    if (type) { queryParams.set('type', type.toString()) }

    return this.client.request<StatusTask[]>('GET', url+queryParams.toString())
  }

}
