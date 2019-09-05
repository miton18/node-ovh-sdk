// GENERATED SDK for support API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Chat configuration
 */
export interface SupportchatConfiguration {
  host: string
}

/**
 * Chat queue calendar
 */
export interface SupportchatqueueCalendar {
  days: SupportchatqueueCalendarDay[]
  timezone: string
}

/**
 * support chat calendar day
 */
export interface SupportchatqueueCalendarDay {
  name: SupportchatqueueCalendarDay
  timeSlots: SupportchatqueueCalendarTimeSlot[]
}

/*
 * support chat calendar days
 */
export enum SupportchatqueueCalendarDay {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
  TODAY = 'today'
}

/**
 * Calendar time slot
 */
export interface SupportchatqueueCalendarTimeSlot {
  endTime: any
  startTime: any
}

/*
 * support category
 */
export enum SupportchatqueueCategory {
  COM = 'COM',
  HLP = 'HLP'
}

/*
 * support chat products
 */
export enum SupportchatqueueProduct {
  CLO = 'CLO',
  DSE = 'DSE',
  KEB = 'KEB',
  PCC = 'PCC',
  PCI = 'PCI',
  VPS = 'VPS',
  WEB = 'WEB'
}

/**
 * Chat queue
 */
export interface SupportchatqueueQueue {
  calendar?: SupportchatqueueCalendar
  entryPoint: number
  name: string
  status: SupportchatqueueStatus
}

/*
 * status of the queue
 */
export enum SupportchatqueueStatus {
  OPEN = 'open',
  OUT_OF_BUSINESS_HOURS = 'out_of_business_hours',
  CLOSING_DAY = 'closing_day',
  HOLIDAY = 'holiday'
}

/**
 * Support ticket message
 */
export interface SupportMessage {
  body: string
  creationDate: string
  from: SupportMessageSender
  messageId: number
  ticketId: number
  updateDate: string
}

/*
 * Message sender type
 */
export enum SupportMessageSender {
  CUSTOMER = 'customer',
  SUPPORT = 'support'
}

/**
 * Newly created support identifiers
 */
export interface SupportNewMessageInfo {
  messageId: number
  ticketId: number
  ticketNumber: number
}

/**
 * Support Ticket
 */
export interface SupportTicket {
  accountId: any
  canBeClosed: boolean
  category?: SupportTicketCategory
  creationDate: string
  lastMessageFrom: SupportMessageSender
  product?: SupportTicketProduct
  score: string
  serviceName?: string
  state: SupportTicketStatus
  subject: string
  ticketId: number
  ticketNumber: number
  type: SupportTicketType
  updateDate: string
}

/*
 * Ticket request category
 */
export enum SupportTicketCategory {
  ASSISTANCE = 'assistance',
  BILLING = 'billing',
  INCIDENT = 'incident'
}

/*
 * Ticket product
 */
export enum SupportTicketProduct {
  ADSL = 'adsl',
  CDN = 'cdn',
  DEDICATED = 'dedicated',
  DEDICATED_BILLING = 'dedicated-billing',
  DEDICATED_OTHER = 'dedicated-other',
  DEDICATEDCLOUD = 'dedicatedcloud',
  DOMAIN = 'domain',
  EXCHANGE = 'exchange',
  FAX = 'fax',
  HOSTING = 'hosting',
  HOUSING = 'housing',
  IAAS = 'iaas',
  MAIL = 'mail',
  NETWORK = 'network',
  PUBLICCLOUD = 'publiccloud',
  SMS = 'sms',
  SSL = 'ssl',
  STORAGE = 'storage',
  TELECOM_BILLING = 'telecom-billing',
  TELECOM_OTHER = 'telecom-other',
  VOIP = 'voip',
  VPS = 'vps',
  WEB_BILLING = 'web-billing',
  WEB_OTHER = 'web-other'
}

/*
 * Support ticket statuses
 */
export enum SupportTicketStatus {
  CLOSED = 'closed',
  OPEN = 'open',
  UNKNOWN = 'unknown'
}

/*
 * Ticket request subcategory
 */
export enum SupportTicketSubCategory {
  ALERTS = 'alerts',
  AUTORENEW = 'autorenew',
  BILL = 'bill',
  DOWN = 'down',
  INPROGRESS = 'inProgress',
  NEW = 'new',
  OTHER = 'other',
  PERFS = 'perfs',
  START = 'start',
  USAGE = 'usage'
}

/*
 * Ticket type (criticalIntervention requires VIP support level)
 */
export enum SupportTicketType {
  CRITICALINTERVENTION = 'criticalIntervention',
  GENERICREQUEST = 'genericRequest'
}


export class Support {
  constructor(private client: Client) {}

  /**
   * List support tickets identifiers for this service [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets#GET)
   */
  ListSupportTicketsIdentifiersForThisService(archived?: boolean, category?: SupportTicketCategory, maxCreationDate?: string, minCreationDate?: string, product?: SupportTicketProduct, serviceName?: string, status?: SupportTicketStatus, subject?: string, ticketNumber?: string): Promise<number[]> {
    let url = `/support/tickets?`

    const queryParams = new QueryParams()
    if (archived) { queryParams.set('archived', archived.toString()) }
    if (category) { queryParams.set('category', category.toString()) }
    if (maxCreationDate) { queryParams.set('maxCreationDate', maxCreationDate.toString()) }
    if (minCreationDate) { queryParams.set('minCreationDate', minCreationDate.toString()) }
    if (product) { queryParams.set('product', product.toString()) }
    if (serviceName) { queryParams.set('serviceName', serviceName) }
    if (status) { queryParams.set('status', status.toString()) }
    if (subject) { queryParams.set('subject', subject) }
    if (ticketNumber) { queryParams.set('ticketNumber', ticketNumber) }

    return this.client.request<number[]>('GET', url+queryParams.toString())
  }

  /**
   * Get ticket [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D#GET)
   */
  GetTicket(ticketId: number): Promise<SupportTicket> {
    let url = `/support/tickets/${ticketId}`

    return this.client.request<SupportTicket>('GET', url)
  }

  /**
   * Check whether ticket can be scored [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/canBeScored#GET)
   */
  ChecksWhetherTicketCanBeScored(ticketId: number): Promise<boolean> {
    let url = `/support/tickets/${ticketId}/canBeScored`

    return this.client.request<boolean>('GET', url)
  }

  /**
   * Close ticket [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/close#POST)
   */
  CloseTicket(ticketId: number): Promise<void> {
    let url = `/support/tickets/${ticketId}/close`

    return this.client.request<void>('POST', url)
  }

  /**
   * Get ticket messages [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/messages#GET)
   */
  GetTicketMessages(ticketId: number): Promise<SupportMessage[]> {
    let url = `/support/tickets/${ticketId}/messages`

    return this.client.request<SupportMessage[]>('GET', url)
  }

  /**
   * Reopen a ticket [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/reopen#POST)
   */
  ReopenATicket(body: string, ticketId: number): Promise<void> {
    let url = `/support/tickets/${ticketId}/reopen`

    return this.client.request<void>('POST', url, {body})
  }

  /**
   * Reply to ticket [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/reply#POST)
   */
  ReplyToTicket(body: string, ticketId: number): Promise<void> {
    let url = `/support/tickets/${ticketId}/reply`

    return this.client.request<void>('POST', url, {body})
  }

  /**
   * Set ticket score [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/score#POST)
   */
  SetTicketScore(score: string, ticketId: number, scoreComment?: string): Promise<void> {
    let url = `/support/tickets/${ticketId}/score`

    return this.client.request<void>('POST', url, {score, scoreComment})
  }

  /**
   * Create a new ticket [PRODUCTION]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/create#POST)
   */
  CreateANewTicket(body: string, subject: string, type: SupportTicketType, category?: SupportTicketCategory, product?: SupportTicketProduct, serviceName?: string, subcategory?: SupportTicketSubCategory): Promise<SupportNewMessageInfo> {
    let url = `/support/tickets/create`

    return this.client.request<SupportNewMessageInfo>('POST', url, {body, subject, type, category, product, serviceName, subcategory})
  }

}
