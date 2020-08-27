import React from "react";
import {connect} from 'react-redux'
import {Result, List, WhiteSpace, Button, Modal} from "antd-mobile";
import Cookies from 'js-cookie'
import {ResetUser} from '../../../.././redux/actions'

const Item = List.Item
const Brief = Item.Brief

class Personal extends React.Component{

    logOut = () => {
        Modal.alert('退出', '确认退出登陆吗?',[
            {
                text: '取消'
            },
            {
                text: '确定',
                onPress: () => {
                    Cookies.remove('userId')
                    this.props.ResetUser()
                }
            }
        ])
    }

    render() {
        const {user} = this.props
        return (
            <div>
                <Result
                    img={<img src={require(`../../../.././assets/img/headSelector/${user.header}.jpg`)} style={{width: "50px"}} alt={'head'}/>}
                    title={user.username}
                    message={user.company}
                />

                <List renderHeader={() => '相关信息'}>
                    <Item multipleLine>
                        <Brief>职位:{user.post}</Brief>
                        <Brief>简介:{user.info}</Brief>
                        {user.salary ? <Brief>薪资:{user.salary}</Brief> : null}
                    </Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Button type={'warning'} onClick={this.logOut}>退出登录</Button>
                </List>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {ResetUser}
)(Personal)