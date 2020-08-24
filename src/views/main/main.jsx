import React from "react";
import {Switch, Route, Link} from 'react-router-dom'

import bossInfo from './childComps/boss-info'
import finderInfo from './childComps/finder-info'
export default class Main extends React.Component{
    render() {
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