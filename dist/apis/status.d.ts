import { Client } from '../client';
export declare enum OvhstatustaskTaskImpact {
    PARTIALUNAVAILABILITY = "partialUnavailability",
    FULLUNAVAILABILITY = "fullUnavailability",
    DOWNTIME = "downtime",
    NONE = "none",
    UNKNOWN = "unknown"
}
export declare enum OvhstatustaskTaskStatus {
    PLANNED = "planned",
    INPROGRESS = "inProgress",
    FINISHED = "finished"
}
export declare enum OvhstatustaskTaskType {
    INCIDENT = "incident",
    MAINTENANCE = "maintenance",
    UPGRADE = "upgrade"
}
/**
 * A reply is useful to know the progress of a task
 */
export interface StatusReply {
    comment: string;
    date: string;
}
/**
 * A task linked to one of your services
 */
export interface StatusTask {
    category: string;
    endDate?: string;
    impact: OvhstatustaskTaskImpact;
    impactedService: string;
    progress: number;
    project: string;
    reference: string;
    replies: StatusReply[];
    startDate?: string;
    status: OvhstatustaskTaskStatus;
    title: string;
    type: OvhstatustaskTaskType;
    uuid: string;
}
export declare class Status {
    private client;
    constructor(client: Client);
    /**
     * API to get incidents or maintenances linked to nichandle services [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/status/task#GET)
     */
    FindAllTheIncidentsOrMaintenancesLinkedToYourServices(impact?: OvhstatustaskTaskImpact, status?: OvhstatustaskTaskStatus, type?: OvhstatustaskTaskType): Promise<StatusTask[]>;
}
//# sourceMappingURL=status.d.ts.map