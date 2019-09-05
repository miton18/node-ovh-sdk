export declare class HTTPError extends Error {
    name: string;
    status: number;
    headers: {
        [k: string]: string[];
    };
    stack?: string;
    constructor(message: string, status: number, headers: {
        [k: string]: string[];
    });
    toString(): string;
}
//# sourceMappingURL=errors.d.ts.map