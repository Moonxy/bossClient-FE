import axios from 'axios'

export function request(config) {
    axios.defaults.withCredentials = true
    const instance = axios.create({
        baseURL: 'http://localhost:5000'
    })
    return instance(config)
}