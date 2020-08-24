import {combineReducers} from "redux";
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    FLAG_CHANGE,
    RECEIVE_USER,
    RESET_USER
} from './action-types'
import {getRedirectTo} from '.././utils/utils'

const initUser = {
    username: '',
    type: '',
    msg: '',
    redirectPath: ''
}

const initFlag = 0
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

function flag(state=initFlag, action) {
    switch (action.type) {
        case FLAG_CHANGE:
            return state + 1
        default:
            return state
    }
}

export default combineReducers({
    user,
    flag
})