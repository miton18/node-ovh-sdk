import fetch from 'node-fetch'
import fs from 'fs'
import override from './override'

/**
 * Return a valid JS data type or a registered API model as data type
 * @param {string} t type to compute
 * @param {any[]} models knows models for this API
 * @returns {string}
 */
function jsType(t, models = []) {
    const typesMap = {
        long: 'number',
        date: 'string',
        datetime: 'string',
        password: 'string',
        uuid: 'string',
        ip: 'string',
        ipv4: 'string',
        ipv6: 'string',
        ipBlock: 'string',
        text: 'string'
    }

    const tWithoutArray = t.replace('[]', '')
    if (tWithoutArray === 'T') {
        return t
    }
    if (tWithoutArray.includes('<') && tWithoutArray.includes('>')) {
        const splits = t.split('<')

        if (jsType(sanitizeName(splits[0])) === 'any') {
            return 'any'
        }

        return `${jsType(sanitizeName(splits[0]), models)}<${jsType(splits[1].replace('>', ''), models)}>`
    }
    if (typesMap[tWithoutArray]) {
        return t.replace(tWithoutArray, typesMap[tWithoutArray])
    }
    if(['string', 'number', 'boolean', 'void'].indexOf(tWithoutArray) >= 0) {
        return t
    }
    if (models.includes(tWithoutArray)) {
        return sanitizeName(t)
    }
    return 'any'
}

/**
 * Compute a function prototype parameters
 * @param {any[]} parameters list of function parameters
 * @param {any[]} models models knows models for this API
 * @returns {string}
 */
function proto(parameters, models) {
    return parameters
        .sort((a, b) => {
            if (a.required !== b.required) {
                return b.required ? 1 : -1
            }
            if (!a.name) return 1
            if (!b.name) return -1
            return (a.name || '').localeCompare(b.name || '')
        })
        .map(p => {
            let name = p.name || 'payload'
            name = sanitizeQueryParam(name)
            return `${name}${p.required ? '': '?'}: ${jsType(p.dataType, models)}`
        }).join(', ')
}

/**
 * Make query parameter name usable in JS
 * @param {string} p parameter to sanitize
 * @returns {string}
 */
function sanitizeQueryParam(p) {
    if (p.includes('.')) {
        const splits = p.split('.')
        p = splits.map((split, i) => {
            if (i === 0) return split

            return split.charAt(0).toUpperCase() + split.slice(1)
        }).join('')
    }

    const forbidden = ['default', 'function', 'url']
    if (forbidden.some(e => p === e)) {
        p = '_' + p
    }
    return p
}

/**
 * Make models name usable in JS
 * @param {string} name model name to sanitize
 * @returns {string}
 */
function sanitizeName(name) {
    let n = name
        .replace(/^(metrics|xdsl)/g, '')
        .replace('api', '')
        .replace(/\./g, '')
        .replace(/\n|\{|\}/g, '')
        .replace(/\'s|\"s/g, '')
        .replace(/\'|\"/g, '')
        .replace(/(,|\/|\(|\)|-)/g, '')
        .replace(/(\:)/g, '_')
        .replace(/&/g, 'And')
        .replace(/^enum|enum$/gi, '')

    const splits = n.split(' ')
    n = splits.map((split, i, all) => {
        return split.charAt(0).toUpperCase() + split.slice(1)
    }).join('')

    return n
}

/**
 * Add code that compute query params for URLs
 * @param {any[]} parameters
 */
function fillQueryParams(parameters) {
    const qParams = parameters.filter(p => p.paramType === 'query')
    if (!qParams.length) {
        return ''
    }
    let r = '\n    const queryParams = new QueryParams()\n'
    r += qParams.map(qParam => `    if (${sanitizeQueryParam(qParam.name)}) { queryParams.set('${qParam.name}', ${sanitizeQueryParam(qParam.name)}${qParam.dataType !== 'string' ? '.toString()' : ''}) }`).join('\n')
    return r += '\n'
}

function sanitizeApiName(apiName) {
    let n = apiName
        .replace('api', '')
        .replace(/\n/g, '')
        .replace(/\'s/g, '')
        .replace(/(,|\(|\)|-)/g, '')
        .replace(/\:/g, '_')
    const splits = n.split('/')
    n = splits.map((split, i, all) => {
        return split.charAt(0).toUpperCase() + split.slice(1)
    }).join('')

    return n
}

/**
 * Return payload if a model is defined, an object if body params are flat
 * @param params
 */
function computePayload(params) {
    //console.log('PARAMETERS', params)
    if (!params.some(param => param.paramType === 'body')) {
        return ''
    }

    const onlyBodyParams = params.filter(p => p.paramType === 'body')
    if (onlyBodyParams.some(p => !p.name)) {
        return ', payload'
    }

    return `, {${onlyBodyParams.map(p => sanitizeQueryParam(p.name)).join(', ')}}`
}

function craftMethodName(desc, api, path, method) {
    //console.log(api, path, method)
    if (override[api]) {
        if (override[api][path]) {
            if (override[api][path][method]) {
                console.log("OVERRIDE", api, path, method)
                return override[api][path][method]
            }
        }
    }
    return sanitizeName(desc)
}

// Main generator
function Generate(API_NAME = '') {
    var apiTs = `// GENERATED SDK for ${API_NAME} API

import {Client} from '../client'
import QueryParams from '../query-params'

`

    fetch(`https://eu.api.ovh.com/1.0/${API_NAME}.json`)
        .then(res => res.json())
        .then(api => {
            // Models and interfaces

            const models = Object.keys(api.models)

            Object
                .entries(api.models)
                .sort((a, b) => {
                    return a[0].localeCompare(b[0])
                })
                .map(([name, model]) => {
                    // Model
                    if (model.properties) {
                    apiTs += `${model.description !== undefined ? '/**\n * ' + model.description + '\n */\n' : ''}export interface ${sanitizeName(name)} {
${Object.entries(model.properties).sort((a, b) => a[0].localeCompare(b[0])).map(([propName, prop]) => `  ${propName.includes('-') ? propName.replace(/\-/g, '') : propName}${prop.canBeNull ? '?': ''}: ${jsType(prop.type, models)}`).join('\n')}
}

`
                    }

                    // Enum
                    if (model.enum) {
                        if (model.description !== undefined ) {
                            apiTs += '/*\n * ' + model.description.replace(/\n/g, '\n// ') + '\n */\n'
                        }

                        if (model.enumType === 'long') {
                            apiTs += `export type ${sanitizeName(name)} = ${model.enum.join(' | ')}\n\n`
                        } else if (model.enum.some(e => e.match(/^\d/))) {
                            apiTs += `export type ${sanitizeName(name)} = ${model.enum.map(e => `'${e}'`).join(' | ')}\n\n`
                        } else {
                            apiTs += `export enum ${sanitizeName(name)} {
${model.enum.filter(e => e !== '').reduce((acc, curr) => { if (!acc.some(e => e.toUpperCase() === curr.toUpperCase())) {  acc.push(curr) } return acc }, []).map(key => `  ${key.toUpperCase().replace(/(\+|\.|\:|\-|\/| )/g, '_').replace(/\(|\)/g, '')} = '${key}'`).join(',\n')}
}\n\n`
                        }
                    }
                })

            // Actions
            const registeredActions = new Set()
            apiTs += `\nexport class ${sanitizeApiName(API_NAME)} {
  constructor(private client: Client) {}
`
            api.apis
                .sort((b, a) => b.path.localeCompare(a.path))
                .forEach(({path, operations, description}) => {
                    operations.forEach(op => {
                    if (op.apiStatus.value === 'INTERNAL') {
                        return
                    }

                    const hasQueryParams = op.parameters.some(p => p.paramType === 'query')
                    const alreadyRegistered = registeredActions.has(sanitizeName(op.description))

                    if (!alreadyRegistered) {
                        registeredActions.add(sanitizeName(op.description))
                    }

                    apiTs += `
  /**
   * ${description ? description : ''} [${op.apiStatus.value}]${alreadyRegistered? '\n  * [WARN] This API action is not ready (duplicate name)' : ''}
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#${path.replace(/\{/g, '%7B').replace(/\}/g, '%7D')}#${op.httpMethod})
   */
  ${alreadyRegistered? '/*\n  ' : ''}${craftMethodName(op.description, API_NAME, path, op.httpMethod)}(${proto(op.parameters, models)}): Promise<${jsType(op.responseType, models)}> {
    let url = \`${path.replace(/\{/g, '${')}${hasQueryParams ? '?': ''}\`
${hasQueryParams ? fillQueryParams(op.parameters) : ''}
    return this.client.request<${jsType(op.responseType, models)}>('${op.httpMethod}', url${hasQueryParams? '+queryParams.toString()' : ''}${computePayload(op.parameters)})
  }${alreadyRegistered? '\n  */' : ''}
`
                    })
                })

            apiTs += '\n}\n'

            // Render this API
            fs.writeFileSync(`./src/apis/${API_NAME.replace(/\//g, '.')}.ts`, apiTs, { flag: 'w'})
        })
        .catch(err => console.error('Err', err))
}

fetch('https://eu.api.ovh.com/1.0/')
    .then(res => res.json())
    .then(apis => {
        apis.apis.map(({path}) => Generate(path.replace(/^\//g, '')))
    })
