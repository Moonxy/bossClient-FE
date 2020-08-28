import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from "./redux/store";

import Login from './views/login/login'
import Register from './views/register/register'
import Main from './views/main/main'

import './socket/socketIO'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path={'/login'} component={Login}></Route>
                <Route path={'/register'} component={Register}></Route>
                <Route component={Main}></Route>
            </Switch>
        </Router>
    </Provider>,
  document.getElementById('root')
);
