import Register from "../network/register"
import Login from '../network/login'
import Update from '../network/update'
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    FLAG_CHANGE,
    RECEIVE_USER,
    RESET_USER
} from './action-types'

export const AuthSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
export const ErrorMsg = (msg) => ({type: ERROR_MSG, data: msg})
export const ChangeFlag = () => ({type: FLAG_CHANGE})
export const ReceiveUser = (user) => ({type: RECEIVE_USER, data: user})
export const ResetUser = (user) => ({type: RESET_USER, data: user})

export function register(user) {
    const {username, password, confirmPassword, type} = user
    if(!username || !password || !type)
        return ErrorMsg('账号或密码或用户类型不能为空')
    else if(password !== confirmPassword)
        return ErrorMsg('两次密码不一致')
    return async dispatch => {
        const response = await Register(user)
        if(response.data.code === 0){
            dispatch(AuthSuccess(response.data.data))
        }else{
            dispatch(ErrorMsg(response.data.msg))
        }
    }
}

export function login(user) {
    const {username, password} = user
    if(!username || !password)
        return ErrorMsg('账号或密码或用户类型不能为空')
    return async dispatch => {
        const response = await Login(username, password)
        if(response.data.code === 0){
            dispatch(AuthSuccess(response.data.data))
        }else{
            dispatch(ErrorMsg(response.data.msg))
        }
    }
}

export function updateUser(user) {
    return async dispatch => {
        const response = await Update(user)
        console.log(response)
        if(response.data.code === 0){
            dispatch(ReceiveUser(response.data.data))
        }else{
            dispatch(ResetUser(response.data.msg))
        }
    }
}