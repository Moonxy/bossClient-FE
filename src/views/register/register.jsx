import React from "react";
import {connect} from 'react-redux'
import {register} from '../../redux/actions'
import {Redirect} from 'react-router-dom'
import {
    NavBar,
    WingBlank,
    WhiteSpace,
    Radio,
    Button,
    List,
    InputItem
} from "antd-mobile";
import logo from '../../assets/img/register/registerLogo.jpg'

import "../../assets/css/register.css"
import ListItem from "antd-mobile/es/list/ListItem";

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            type: 'finder'
        }
    }

    handleChange = (stateName, value) => {
        this.setState({
            [stateName]: value
        })
    }

    register = () => {
        this.props.register(this.state)
    }

    loginClick = () => {
        this.props.history.push('/login')
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
                        <InputItem placeholder={'请确认密码'} onChange={value => this.handleChange('confirmPassword', value)} type={"password"}>确认密码:</InputItem>
                        <ListItem>
                            <span>用户类型</span>
                            &nbsp; &nbsp; &nbsp;
                            <Radio checked={this.state.type === 'finder'} onChange={() => this.handleChange('type', 'finder')}>求职者</Radio>
                            &nbsp; &nbsp;
                            <Radio checked={this.state.type === 'boss'} onChange={() => this.handleChange('type', 'boss')}>老板</Radio>
                        </ListItem>
                        <Button onClick={this.register}>注册</Button>
                        <WhiteSpace></WhiteSpace>
                        <Button onClick={this.loginClick}>已有账户?去登陆</Button>
                    </List>
                    {msg ? <div className={'error-msg'}>{msg}</div> : null}
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {register}
)(Register)