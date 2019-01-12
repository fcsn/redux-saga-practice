import axios, { CancelToken } from 'axios'

export const getUsers = () => axios.get('https://api.github.com/users')

export function getUser (username) {
    const source = CancelToken.source()
    const request = axios.get(`/users/${username}`, {
        cancelToken: source.token
    })
    // request[CANCEL] = source.cancel
    return request
}
