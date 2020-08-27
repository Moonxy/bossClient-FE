import React from "react";
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {NavBar} from "antd-mobile";

import bossInfo from './childComps/complete-info/boss-info'
import finderInfo from './childComps/complete-info/finder-info'
import boss from './childComps/main-interface/boss'
import finder from './childComps/main-interface/finder'
import message from './childComps/main-interface/message'
import personal from "./childComps/main-interface/personal";
import notFound from "./childComps/main-interface/notFound";
import Tabbar from "../../components/content/tabbar";

import {getRedirectTo} from '../.././utils/utils'
import {getUser} from '../.././redux/actions'

import '../.././assets/css/tabbar.css'
import '../.././assets/css/navbar.css'

class Main extends React.Component{

    navList = [
        {
            path: '/boss',
            component: boss,
            title: '求职者列表',
            icon: 'finder',
            text: '求职者',
            hide: false
        },
        {
            path: '/finder',
            component: finder,
            title: '面试官列表',
            icon: 'boss',
            text: '面试官',
            hide: false
        },
        {
            path: '/message',
            component: message,
            title: '消息列表',
            icon: 'message',
            text: '消息'
        },
        {
            path: '/personal',
            component: personal,
            title: '用户中心',
            icon: 'personal',
            text: '个人'
        }
    ]

    componentDidMount() {
        const userId = Cookies.get('userId')
        if(userId && !this.props.user._id){
            this.props.getUser()
        }
    }

    render() {
        /*自动登录*/
        const userId = Cookies.get('userId')
        if(!userId){
            return <Redirect to={'/login'}/>
        }else{
            const user = this.props.user
            if(!user._id){
                return null
            }else{
                let path = this.props.location.pathname
                if(path === '/'){
                    path = getRedirectTo(user.type, user.header)
                    return <Redirect to={path}/>
                }
            }
        }

        const {navList} = this
        const path = this.props.location.pathname
        const currentNav = navList.find((item, index) => {
            return item.path === path
        })

        /*判断哪个tabbarItem需要被隐藏*/
        if(currentNav){
            if(this.props.user.type === 'boss')
                navList[1].hide = true
            else
                navList[0].hide = true
        }
        return (
            <div>
                {currentNav ? (<NavBar>{currentNav.title}</NavBar>) : null}
                <Switch>
                    {
                        navList.map((item, index) => <Route path={item.path} component={item.component} key={index}></Route>)
                    }
                    <Route path={'/bossInfo'} component={bossInfo}></Route>
                    <Route path={'/finderInfo'} component={finderInfo}></Route>
                    <Route component={notFound}></Route>
                </Switch>
                {currentNav ? (<Tabbar navList={navList}></Tabbar>) : null}
            </div>
        )
    }
}
export default connect(
    state => ({user: state.user}),
    {getUser}
)(Main)