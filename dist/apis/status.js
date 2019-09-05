"use strict";
// GENERATED SDK for status API
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = __importDefault(require("../query-params"));
/*
 * Description not available
 */
var OvhstatustaskTaskImpact;
(function (OvhstatustaskTaskImpact) {
    OvhstatustaskTaskImpact["PARTIALUNAVAILABILITY"] = "partialUnavailability";
    OvhstatustaskTaskImpact["FULLUNAVAILABILITY"] = "fullUnavailability";
    OvhstatustaskTaskImpact["DOWNTIME"] = "downtime";
    OvhstatustaskTaskImpact["NONE"] = "none";
    OvhstatustaskTaskImpact["UNKNOWN"] = "unknown";
})(OvhstatustaskTaskImpact = exports.OvhstatustaskTaskImpact || (exports.OvhstatustaskTaskImpact = {}));
/*
 * Description not available
 */
var OvhstatustaskTaskStatus;
(function (OvhstatustaskTaskStatus) {
    OvhstatustaskTaskStatus["PLANNED"] = "planned";
    OvhstatustaskTaskStatus["INPROGRESS"] = "inProgress";
    OvhstatustaskTaskStatus["FINISHED"] = "finished";
})(OvhstatustaskTaskStatus = exports.OvhstatustaskTaskStatus || (exports.OvhstatustaskTaskStatus = {}));
/*
 * Description not available
 */
var OvhstatustaskTaskType;
(function (OvhstatustaskTaskType) {
    OvhstatustaskTaskType["INCIDENT"] = "incident";
    OvhstatustaskTaskType["MAINTENANCE"] = "maintenance";
    OvhstatustaskTaskType["UPGRADE"] = "upgrade";
})(OvhstatustaskTaskType = exports.OvhstatustaskTaskType || (exports.OvhstatustaskTaskType = {}));
class Status {
    constructor(client) {
        this.client = client;
    }
    /**
     * API to get incidents or maintenances linked to nichandle services [BETA]
     * [See on api.ovh.com](https://eu.api.ovh.com/console/#/status/task#GET)
     */
    FindAllTheIncidentsOrMaintenancesLinkedToYourServices(impact, status, type) {
        let url = `/status/task?`;
        const queryParams = new query_params_1.default();
        if (impact) {
            queryParams.set('impact', impact.toString());
        }
        if (status) {
            queryParams.set('status', status.toString());
        }
        if (type) {
            queryParams.set('type', type.toString());
        }
        return this.client.request('GET', url + queryParams.toString());
    }
}
exports.Status = Status;
//# sourceMappingURL=status.js.map