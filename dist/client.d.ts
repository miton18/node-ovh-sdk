import Endpoint from './endpoint';
export interface ClientConfig {
    endpoint?: Endpoint;
    applicationKey?: string;
    applicationSecret?: string;
    consumerKey?: string;
    timeout?: number;
}
export declare class Client {
    private endpoint;
    private _applicationKey;
    private _applicationSecret;
    private _consumerKey;
    private timeout?;
    private basePath;
    private timeDiff;
    constructor(config: ClientConfig);
    applicationKey: string;
    applicationSecret: string;
    consumerKey: string;
    readonly urlBase: string;
    syncTime(): Promise<void>;
    request<T>(method: string, path: string, body?: any): Promise<T>;
    private signRequest;
}
export default Client;
//# sourceMappingURL=client.d.ts.map