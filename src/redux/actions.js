import Register from "../network/register"
import Login from '../network/login'
import Update from '../network/update'
import User from '../network/user'
import UserList from '../network/userList'
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER,
    GET_USERLIST
} from './action-types'

export const AuthSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
export const ErrorMsg = (msg) => ({type: ERROR_MSG, data: msg})
export const ReceiveUser = (user) => ({type: RECEIVE_USER, data: user})
export const ResetUser = (user) => ({type: RESET_USER, data: user})
export const GetUserList = (user) => ({type: GET_USERLIST, data: user})

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

export function getUser() {
    return async dispatch => {
        const response = await User()
        if(response.data.code === 0){
            dispatch(ReceiveUser(response.data.data))
        }else{
            dispatch(ResetUser(response.data.msg))
        }
    }
}

export function getUserList(type) {
    return async dispatch => {
        const response = await UserList(type)
        if(response.data.code === 0){
            dispatch(GetUserList(response.data.data))
        }
    }
}