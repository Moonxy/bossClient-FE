import {combineReducers} from "redux";
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER,
    GET_USERLIST
} from './action-types'
import {getRedirectTo} from '.././utils/utils'

const initUser = {
    username: '',
    type: '',
    msg: '',
    redirectPath: ''
}
const initUserList = []

function user(state=initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...action.data, redirectPath: getRedirectTo(action.data.type, action.data.header)}
        case ERROR_MSG:
            return {...state, msg: action.data}
        case RECEIVE_USER:
            return action.data
        case RESET_USER:
            return {initUser, msg: action.data}
        default:
            return state
    }
}

function userList(state = initUserList, action) {
    switch (action.type) {
        case GET_USERLIST:
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    user,
    userList
})