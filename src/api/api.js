import { generateHeaders } from "../common/Helper"

const apiCall = (url, method, body = null, resolve, reject, authenticate = false) =>
    fetch(url, {
        method: method,
        headers: generateHeaders(authenticate),
        body: body !== null ? JSON.stringify(body) : null
    })
        .then(response => {
            if (response.ok) {
                response.json()
                    .then(json => resolve(json))
            } else {
                reject(response)
            }
        })

export const put = (url, body) =>
    new Promise(
        (resolve, reject) => apiCall(url, 'PUT', body, resolve, reject)
    )

export const post = (url, body) =>
    new Promise(
        (resolve, reject) => apiCall(url, 'POST', body, resolve, reject)
    )


export const get = url =>
    new Promise(
        (resolve, reject) => apiCall(url, 'GET', null, resolve, reject, true)
    )