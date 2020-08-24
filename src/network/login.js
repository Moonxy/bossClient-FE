import {request} from "./request";

export default function(username, password){
    return request(({
        method: 'post',
        url: '/login',
        data: {
            username,
            password
        }
    }))
}