import React from "react";
import {connect} from 'react-redux'
import {login} from '../.././redux/actions'
import {Redirect} from 'react-router-dom'
import {
    NavBar,
    WingBlank,
    WhiteSpace,
    Button,
    List,
    InputItem
} from "antd-mobile";
import logo from '../../assets/img/register/registerLogo.jpg'

import "../../assets/css/register.css"

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (stateName, value) => {
        this.setState({
            [stateName]: value
        })
    }

    registerClick = () => {
        this.props.history.push('/register')
    }

    login = () => {
        this.props.login(this.state)
    }
    render() {
        const {msg, redirectPath} = this.props.user
        if(redirectPath){
            return <Redirect to={redirectPath}/>
        }
        return (
            <div>
                <NavBar
                    style={{backgroundColor:"orange"}}
                >林科大直聘</NavBar>
                <WhiteSpace></WhiteSpace>
                <div className={"logoImg"}>
                    <img src={logo}/>
                </div>
                <WhiteSpace></WhiteSpace>
                <WingBlank size={"sm"}>
                    <List>
                        <InputItem placeholder={'请输入用户名'} onChange={value => this.handleChange('username', value)}>用户名:</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem placeholder={'请输入密码'} onChange={value => this.handleChange('password', value)} type={"password"}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <Button onClick={this.login}>登录</Button>
                        <WhiteSpace></WhiteSpace>
                        <Button onClick={this.registerClick}>没有账户?去注册</Button>
                    </List>
                    {msg ? <div className={'error-msg'}>{msg}</div> : null}
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {login}
)(Login)