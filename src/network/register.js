import {request} from "./request";

export default function(user){
    return request(({
        method: 'post',
        url: '/register',
        data: user
    }))
}