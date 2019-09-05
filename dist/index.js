"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const auth_1 = require("./apis/auth");
const metrics_1 = require("./apis/metrics");
const ipLoadbalancing_1 = require("./apis/ipLoadbalancing");
const dedicated_server_1 = require("./apis/dedicated.server");
const hosting_privateDatabase_1 = require("./apis/hosting.privateDatabase");
class SDK {
    constructor(config) {
        this.client = new client_1.Client(config);
    }
    get auth() {
        return new auth_1.Auth(this.client);
    }
    get metrics() {
        return new metrics_1.Metrics(this.client);
    }
    get ipLoadbalancing() {
        return new ipLoadbalancing_1.IpLoadbalancing(this.client);
    }
    get dedicatedServer() {
        return new dedicated_server_1.DedicatedServer(this.client);
    }
    get hostingPrivateDatabase() {
        return new hosting_privateDatabase_1.HostingPrivateDatabase(this.client);
    }
}
exports.SDK = SDK;
exports.default = SDK;
//# sourceMappingURL=index.js.map