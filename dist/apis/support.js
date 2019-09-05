"use strict";
// GENERATED SDK for support API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * support chat calendar days
 */
var SupportchatqueueCalendarDay;
(function (SupportchatqueueCalendarDay) {
    SupportchatqueueCalendarDay["MONDAY"] = "monday";
    SupportchatqueueCalendarDay["TUESDAY"] = "tuesday";
    SupportchatqueueCalendarDay["WEDNESDAY"] = "wednesday";
    SupportchatqueueCalendarDay["THURSDAY"] = "thursday";
    SupportchatqueueCalendarDay["FRIDAY"] = "friday";
    SupportchatqueueCalendarDay["SATURDAY"] = "saturday";
    SupportchatqueueCalendarDay["SUNDAY"] = "sunday";
    SupportchatqueueCalendarDay["TODAY"] = "today";
})(SupportchatqueueCalendarDay = exports.SupportchatqueueCalendarDay || (exports.SupportchatqueueCalendarDay = {}));
/*
 * support category
 */
var SupportchatqueueCategory;
(function (SupportchatqueueCategory) {
    SupportchatqueueCategory["COM"] = "COM";
    SupportchatqueueCategory["HLP"] = "HLP";
})(SupportchatqueueCategory = exports.SupportchatqueueCategory || (exports.SupportchatqueueCategory = {}));
/*
 * support chat products
 */
var SupportchatqueueProduct;
(function (SupportchatqueueProduct) {
    SupportchatqueueProduct["CLO"] = "CLO";
    SupportchatqueueProduct["DSE"] = "DSE";
    SupportchatqueueProduct["KEB"] = "KEB";
    SupportchatqueueProduct["PCC"] = "PCC";
    SupportchatqueueProduct["PCI"] = "PCI";
    SupportchatqueueProduct["VPS"] = "VPS";
    SupportchatqueueProduct["WEB"] = "WEB";
})(SupportchatqueueProduct = exports.SupportchatqueueProduct || (exports.SupportchatqueueProduct = {}));
/*
 * status of the queue
 */
var SupportchatqueueStatus;
(function (SupportchatqueueStatus) {
    SupportchatqueueStatus["OPEN"] = "open";
    SupportchatqueueStatus["OUT_OF_BUSINESS_HOURS"] = "out_of_business_hours";
    SupportchatqueueStatus["CLOSING_DAY"] = "closing_day";
    SupportchatqueueStatus["HOLIDAY"] = "holiday";
})(SupportchatqueueStatus = exports.SupportchatqueueStatus || (exports.SupportchatqueueStatus = {}));
/*
 * Message sender type
 */
var SupportMessageSender;
(function (SupportMessageSender) {
    SupportMessageSender["CUSTOMER"] = "customer";
    SupportMessageSender["SUPPORT"] = "support";
})(SupportMessageSender = exports.SupportMessageSender || (exports.SupportMessageSender = {}));
/*
 * Ticket request category
 */
var SupportTicketCategory;
(function (SupportTicketCategory) {
    SupportTicketCategory["ASSISTANCE"] = "assistance";
    SupportTicketCategory["BILLING"] = "billing";
    SupportTicketCategory["INCIDENT"] = "incident";
})(SupportTicketCategory = exports.SupportTicketCategory || (exports.SupportTicketCategory = {}));
/*
 * Ticket product
 */
var SupportTicketProduct;
(function (SupportTicketProduct) {
    SupportTicketProduct["ADSL"] = "adsl";
    SupportTicketProduct["CDN"] = "cdn";
    SupportTicketProduct["DEDICATED"] = "dedicated";
    SupportTicketProduct["DEDICATED_BILLING"] = "dedicated-billing";
    SupportTicketProduct["DEDICATED_OTHER"] = "dedicated-other";
    SupportTicketProduct["DEDICATEDCLOUD"] = "dedicatedcloud";
    SupportTicketProduct["DOMAIN"] = "domain";
    SupportTicketProduct["EXCHANGE"] = "exchange";
    SupportTicketProduct["FAX"] = "fax";
    SupportTicketProduct["HOSTING"] = "hosting";
    SupportTicketProduct["HOUSING"] = "housing";
    SupportTicketProduct["IAAS"] = "iaas";
    SupportTicketProduct["MAIL"] = "mail";
    SupportTicketProduct["NETWORK"] = "network";
    SupportTicketProduct["PUBLICCLOUD"] = "publiccloud";
    SupportTicketProduct["SMS"] = "sms";
    SupportTicketProduct["SSL"] = "ssl";
    SupportTicketProduct["STORAGE"] = "storage";
    SupportTicketProduct["TELECOM_BILLING"] = "telecom-billing";
    SupportTicketProduct["TELECOM_OTHER"] = "telecom-other";
    SupportTicketProduct["VOIP"] = "voip";
    SupportTicketProduct["VPS"] = "vps";
    SupportTicketProduct["WEB_BILLING"] = "web-billing";
    SupportTicketProduct["WEB_OTHER"] = "web-other";
})(SupportTicketProduct = exports.SupportTicketProduct || (exports.SupportTicketProduct = {}));
/*
 * Support ticket statuses
 */
var SupportTicketStatus;
(function (SupportTicketStatus) {
    SupportTicketStatus["CLOSED"] = "closed";
    SupportTicketStatus["OPEN"] = "open";
    SupportTicketStatus["UNKNOWN"] = "unknown";
})(SupportTicketStatus = exports.SupportTicketStatus || (exports.SupportTicketStatus = {}));
/*
 * Ticket request subcategory
 */
var SupportTicketSubCategory;
(function (SupportTicketSubCategory) {
    SupportTicketSubCategory["ALERTS"] = "alerts";
    SupportTicketSubCategory["AUTORENEW"] = "autorenew";
    SupportTicketSubCategory["BILL"] = "bill";
    SupportTicketSubCategory["DOWN"] = "down";
    SupportTicketSubCategory["INPROGRESS"] = "inProgress";
    SupportTicketSubCategory["NEW"] = "new";
    SupportTicketSubCategory["OTHER"] = "other";
    SupportTicketSubCategory["PERFS"] = "perfs";
    SupportTicketSubCategory["START"] = "start";
    SupportTicketSubCategory["USAGE"] = "usage";
})(SupportTicketSubCategory = exports.SupportTicketSubCategory || (exports.SupportTicketSubCategory = {}));
/*
 * Ticket type (criticalIntervention requires VIP support level)
 */
var SupportTicketType;
(function (SupportTicketType) {
    SupportTicketType["CRITICALINTERVENTION"] = "criticalIntervention";
    SupportTicketType["GENERICREQUEST"] = "genericRequest";
})(SupportTicketType = exports.SupportTicketType || (exports.SupportTicketType = {}));
class Support {
    constructor(client) {
        this.client = client;
    }
    /**
     * List support tickets identifiers for this service [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets#GET)
     */
    ListSupportTicketsIdentifiersForThisService(archived, category, maxCreationDate, minCreationDate, product, serviceName, status, subject, ticketNumber) {
        let url = `/support/tickets?`;
        const queryParams = new query_params_1.default();
        if (archived) {
            queryParams.set('archived', archived.toString());
        }
        if (category) {
            queryParams.set('category', category.toString());
        }
        if (maxCreationDate) {
            queryParams.set('maxCreationDate', maxCreationDate.toString());
        }
        if (minCreationDate) {
            queryParams.set('minCreationDate', minCreationDate.toString());
        }
        if (product) {
            queryParams.set('product', product.toString());
        }
        if (serviceName) {
            queryParams.set('serviceName', serviceName);
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        if (subject) {
            queryParams.set('subject', subject);
        }
        if (ticketNumber) {
            queryParams.set('ticketNumber', ticketNumber);
        }
        return this.client.request('GET', url + queryParams.toString());
    }
    /**
     * Get ticket [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D#GET)
     */
    GetTicket(ticketId) {
        let url = `/support/tickets/${ticketId}`;
        return this.client.request('GET', url);
    }
    /**
     * Check whether ticket can be scored [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/canBeScored#GET)
     */
    ChecksWhetherTicketCanBeScored(ticketId) {
        let url = `/support/tickets/${ticketId}/canBeScored`;
        return this.client.request('GET', url);
    }
    /**
     * Close ticket [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/close#POST)
     */
    CloseTicket(ticketId) {
        let url = `/support/tickets/${ticketId}/close`;
        return this.client.request('POST', url);
    }
    /**
     * Get ticket messages [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/messages#GET)
     */
    GetTicketMessages(ticketId) {
        let url = `/support/tickets/${ticketId}/messages`;
        return this.client.request('GET', url);
    }
    /**
     * Reopen a ticket [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/reopen#POST)
     */
    ReopenATicket(body, ticketId) {
        let url = `/support/tickets/${ticketId}/reopen`;
        return this.client.request('POST', url, { body });
    }
    /**
     * Reply to ticket [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/reply#POST)
     */
    ReplyToTicket(body, ticketId) {
        let url = `/support/tickets/${ticketId}/reply`;
        return this.client.request('POST', url, { body });
    }
    /**
     * Set ticket score [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/%7BticketId%7D/score#POST)
     */
    SetTicketScore(score, ticketId, scoreComment) {
        let url = `/support/tickets/${ticketId}/score`;
        return this.client.request('POST', url, { score, scoreComment });
    }
    /**
     * Create a new ticket [PRODUCTION]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/support/tickets/create#POST)
     */
    CreateANewTicket(body, subject, type, category, product, serviceName, subcategory) {
        let url = `/support/tickets/create`;
        return this.client.request('POST', url, { body, subject, type, category, product, serviceName, subcategory });
    }
}
exports.Support = Support;
//# sourceMappingURL=support.js.map