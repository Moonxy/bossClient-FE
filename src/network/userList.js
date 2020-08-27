import {request} from "./request";

export default function (type) {
    return request({
        method: 'get',
        url: '/userlist',
        params: {
            type
        }
    })
}