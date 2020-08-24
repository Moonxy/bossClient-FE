import React from "react";
import {Switch, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import bossInfo from './childComps/boss-info'
import finderInfo from './childComps/finder-info'
class Main extends React.Component{
    render() {
        /*判断是否合法登录*/
        const {_id} = this.props.user
        if(!_id){
            return <Redirect to={'/login'}/>
        }
        return (
            <div>
                main
                <Switch>
                    <Route path={'/bossInfo'} component={bossInfo}></Route>
                    <Route path={'/finderInfo'} component={finderInfo}></Route>
                </Switch>
            </div>
        )
    }
}
export default connect(
    state => ({user: state.user}),
    {}
)(Main)