import { ClientConfig } from './client';
import { Auth } from './apis/auth';
import { Metrics } from './apis/metrics';
import { IpLoadbalancing } from './apis/ipLoadbalancing';
import { DedicatedServer } from './apis/dedicated.server';
import { HostingPrivateDatabase } from './apis/hosting.privateDatabase';
export declare class SDK {
    private client;
    constructor(config: ClientConfig);
    readonly auth: Auth;
    readonly metrics: Metrics;
    readonly ipLoadbalancing: IpLoadbalancing;
    readonly dedicatedServer: DedicatedServer;
    readonly hostingPrivateDatabase: HostingPrivateDatabase;
}
export default SDK;
//# sourceMappingURL=index.d.ts.map