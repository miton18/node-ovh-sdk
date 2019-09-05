import { Client } from '../client';
/**
 * Chat configuration
 */
export interface SupportchatConfiguration {
    host: string;
}
/**
 * Chat queue calendar
 */
export interface SupportchatqueueCalendar {
    days: SupportchatqueueCalendarDay[];
    timezone: string;
}
/**
 * support chat calendar day
 */
export interface SupportchatqueueCalendarDay {
    name: SupportchatqueueCalendarDay;
    timeSlots: SupportchatqueueCalendarTimeSlot[];
}
export declare enum SupportchatqueueCalendarDay {
    MONDAY = "monday",
    TUESDAY = "tuesday",
    WEDNESDAY = "wednesday",
    THURSDAY = "thursday",
    FRIDAY = "friday",
    SATURDAY = "saturday",
    SUNDAY = "sunday",
    TODAY = "today"
}
/**
 * Calendar time slot
 */
export interface SupportchatqueueCalendarTimeSlot {
    endTime: any;
    startTime: any;
}
export declare enum SupportchatqueueCategory {
    COM = "COM",
    HLP = "HLP"
}
export declare enum SupportchatqueueProduct {
    CLO = "CLO",
    DSE = "DSE",
    KEB = "KEB",
    PCC = "PCC",
    PCI = "PCI",
    VPS = "VPS",
    WEB = "WEB"
}
/**
 * Chat queue
 */
export interface SupportchatqueueQueue {
    calendar?: SupportchatqueueCalendar;
    entryPoint: number;
    name: string;
    status: SupportchatqueueStatus;
}
export declare enum SupportchatqueueStatus {
    OPEN = "open",
    OUT_OF_BUSINESS_HOURS = "out_of_business_hours",
    CLOSING_DAY = "closing_day",
    HOLIDAY = "holiday"
}
/**
 * Support ticket message
 */
export interface SupportMessage {
    body: string;
    creationDate: string;
    from: SupportMessageSender;
    messageId: number;
    ticketId: number;
    updateDate: string;
}
export declare enum SupportMessageSender {
    CUSTOMER = "customer",
    SUPPORT = "support"
}
/**
 * Newly created support identifiers
 */
export interface SupportNewMessageInfo {
    messageId: number;
    ticketId: number;
    ticketNumber: number;
}
/**
 * Support Ticket
 */
export interface SupportTicket {
    accountId: any;
    canBeClosed: boolean;
    category?: SupportTicketCategory;
    creationDate: string;
    lastMessageFrom: SupportMessageSender;
    product?: SupportTicketProduct;
    score: string;
    serviceName?: string;
    state: SupportTicketStatus;
    subject: string;
    ticketId: number;
    ticketNumber: number;
    type: SupportTicketType;
    updateDate: string;
}
export declare enum SupportTicketCategory {
    ASSISTANCE = "assistance",
    BILLING = "billing",
    INCIDENT = "incident"
}
export declare enum SupportTicketProduct {
    ADSL = "adsl",
    CDN = "cdn",
    DEDICATED = "dedicated",
    DEDICATED_BILLING = "dedicated-billing",
    DEDICATED_OTHER = "dedicated-other",
    DEDICATEDCLOUD = "dedicatedcloud",
    DOMAIN = "domain",
    EXCHANGE = "exchange",
    FAX = "fax",
    HOSTING = "hosting",
    HOUSING = "housing",
    IAAS = "iaas",
    MAIL = "mail",
    NETWORK = "network",
    PUBLICCLOUD = "publiccloud",
    SMS = "sms",
    SSL = "ssl",
    STORAGE = "storage",
    TELECOM_BILLING = "telecom-billing",
    TELECOM_OTHER = "telecom-other",
    VOIP = "voip",
    VPS = "vps",
    WEB_BILLING = "web-billing",
    WEB_OTHER = "web-other"
}
export declare enum SupportTicketStatus {
    CLOSED = "closed",
    OPEN = "open",
    UNKNOWN = "unknown"
}
export declare enum SupportTicketSubCategory {
    ALERTS = "alerts",
    AUTORENEW = "autorenew",
    BILL = "bill",
    DOWN = "down",
    INPROGRESS = "inProgress",
    NEW = "new",
    OTHER = "other",
    PERFS = "perfs",
    START = "start",
    USAGE = "usage"
}
export declare enum SupportTicketType {
    CRITICALINTERVENTION = "criticalIntervention",
    GENERICREQUEST = "genericRequest"
}
export declare class Support {
    private client;
    constructor(client: Client);
    /**
     * List support tickets identifiers for this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets#GET)
     */
    ListSupportTicketsIdentifiersForThisService(archived?: boolean, category?: SupportTicketCategory, maxCreationDate?: string, minCreationDate?: string, product?: SupportTicketProduct, serviceName?: string, status?: SupportTicketStatus, subject?: string, ticketNumber?: string): Promise<number[]>;
    /**
     * Get ticket [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D#GET)
     */
    GetTicket(ticketId: number): Promise<SupportTicket>;
    /**
     * Check whether ticket can be scored [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/canBeScored#GET)
     */
    ChecksWhetherTicketCanBeScored(ticketId: number): Promise<boolean>;
    /**
     * Close ticket [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/close#POST)
     */
    CloseTicket(ticketId: number): Promise<void>;
    /**
     * Get ticket messages [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/messages#GET)
     */
    GetTicketMessages(ticketId: number): Promise<SupportMessage[]>;
    /**
     * Reopen a ticket [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/reopen#POST)
     */
    ReopenATicket(body: string, ticketId: number): Promise<void>;
    /**
     * Reply to ticket [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/reply#POST)
     */
    ReplyToTicket(body: string, ticketId: number): Promise<void>;
    /**
     * Set ticket score [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/score#POST)
     */
    SetTicketScore(score: string, ticketId: number, scoreComment?: string): Promise<void>;
    /**
     * Create a new ticket [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/create#POST)
     */
    CreateANewTicket(body: string, subject: string, type: SupportTicketType, category?: SupportTicketCategory, product?: SupportTicketProduct, serviceName?: string, subcategory?: SupportTicketSubCategory): Promise<SupportNewMessageInfo>;
}
//# sourceMappingURL=support.d.ts.map