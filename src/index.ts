import { Client, ClientConfig } from './client'

import { Auth } from './apis/auth'
import { Metrics } from './apis/metrics'
import { IpLoadbalancing } from './apis/ipLoadbalancing'
import { DedicatedServer } from './apis/dedicated.server'
import { HostingPrivateDatabase } from './apis/hosting.privateDatabase'


export class SDK {
    private client: Client

    constructor(config: ClientConfig) {
        this.client = new Client(config)
    }

    get auth(): Auth {
        return new Auth(this.client)
    }

    get metrics(): Metrics {
        return new Metrics(this.client)
    }

    get ipLoadbalancing(): IpLoadbalancing {
        return new IpLoadbalancing(this.client)
    }

    get dedicatedServer(): DedicatedServer {
        return new DedicatedServer(this.client)
    }

    get hostingPrivateDatabase(): HostingPrivateDatabase {
        return new HostingPrivateDatabase(this.client)
    }
}

export default SDK