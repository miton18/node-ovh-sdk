import Endpoint from './endpoint'
import fetch, { Response } from 'node-fetch'
import { HTTPError } from './errors'
import { createHash } from 'crypto'

export interface ClientConfig {
    endpoint?: Endpoint
    applicationKey?: string
    applicationSecret?: string
    consumerKey?: string
    timeout?: number
}

export class Client {
    private endpoint: Endpoint
    private applicationKey: string
    private applicationSecret: string
    private consumerKey: string
    private timeout?: number
    private basePath = '/1.0'
    private timeDiff = 0

    constructor(config: ClientConfig) {
        this.endpoint = config.endpoint || Endpoint.OVH_EU
        this.applicationKey = config.applicationKey || ''
        this.applicationSecret = config.applicationSecret || ''
        this.consumerKey = config.consumerKey || ''
        this.timeout = config.timeout || 30 * 1000

        setTimeout(() => this.syncTime())
    }

    get urlBase() {
        return `https://${this.endpoint}${this.basePath}`
    }

    syncTime(): Promise<void> {
        return fetch(`${this.urlBase}/auth/time`)
            .then((res: Response) => {
                if (!res.ok) {
                    throw new Error(`[OVH] Cannot sync time diff with API (${res.statusText})`)
                }
                return res.text()
            })
            .then((diffText: string) => {
                const apiTime = Number.parseInt(diffText)
                this.timeDiff = apiTime - Math.round(Date.now() / 1000)
            })
    }

    request<T>(method: string, path: string, body?: any): Promise<T> {
        const now = (Math.round(Date.now() / 1000) + this.timeDiff)

        if (this.timeDiff === 0) {
            return this.syncTime()
                .then(() => this.request<T>(method, path, body))
        }

        return fetch(`${this.urlBase}${path}`, {
            method,
            body,
            timeout: this.timeout,
            headers: {
                'Content-Type': 'application/json',
                'X-Ovh-Timestamp': now.toString(),
                'X-Ovh-Consumer': this.consumerKey,
                'X-Ovh-Application': this.applicationKey,
                'X-Ovh-Signature': this.signRequest(method, this.urlBase + path, body, now)
            }
        })
        .then((res: Response) => {
            if(!res.ok) {
                return res.text()
                    .then(buf => {
                        throw new HTTPError(`cannot perform request on '${path}': ${buf}`, res.status, res.headers.raw())
                    })
                    .catch(err => {
                        if (err instanceof HTTPError) {
                            throw err
                        }
                        throw new HTTPError(`cannot perform request on '${path}'`, res.status, res.headers.raw())
                    })
            }

            return res.json() as Promise<T>
        })
    }

    private signRequest(httpMethod: string, url: string, body = '', timestamp: number): string {
        let s = [
          this.applicationSecret,
          this.consumerKey,
          httpMethod,
          url,
          body,
          timestamp.toString()
        ]

        return '$1$' + createHash('sha1').update(s.join('+')).digest('hex')
      }
}

export default Client