export default class QueryParams {
    private params: {[key: string]: string}
    constructor() {
        this.params = {}
    }

    has(key: string): boolean {
        return this.params[key] !== undefined
    }

    get(key: string): string {
        return this.params[key]
    }

    set(key: string, value: string | number) {
        if (typeof value === 'number') {
            this.params[key] = value.toString()
            return
        }
        this.params[key] = value
    }

    toString() {
        return '?' + Object.entries(this.params)
            .map(([k, v]) => `${ k }=${ v }`)
            .join('&')
    }
}