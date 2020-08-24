import {request} from './request'

export default function(user) {
    return request(({
        method: 'post',
        url: '/update',
        data: user
    }))
}