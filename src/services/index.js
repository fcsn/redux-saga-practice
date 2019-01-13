import axios, { CancelToken } from 'axios'
import { CANCEL } from 'redux-saga'

export function getUser (userId) {
    const source = CancelToken.source()
    const request = axios.get(`https://api.github.com/users/${userId}`, {
        cancelToken: source.token
    })
    request[CANCEL] = source.cancel
    return request
}
