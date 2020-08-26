import {request} from "./request";

export default function() {
    return request({
        method: 'get',
        url: '/user'
    })
}