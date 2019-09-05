
export type IP = string
// WIP
export function isIP(str: string): str is IP {
    return /\d{1,2}/g.test(str)
}
