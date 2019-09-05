export class HTTPError extends Error {
    name: string
    status: number
    headers: { [k: string]: string[] }
    stack?: string

    constructor(message: string, status: number, headers: { [k: string]: string[] }) {
        super(message)

        this.status = status
        this.headers = headers
        this.name = this.constructor.name

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor)
        } else {
            this.stack = (new Error(message)).stack
        }
    }

    toString() {
        return `${this.name}(${this.status}): ${this.message}, ${this.headers}`
    }
}