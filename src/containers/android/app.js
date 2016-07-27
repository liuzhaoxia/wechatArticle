/**
 * Created by wangtun on 2016/7/21.
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router, Scene, Modal } from 'react-native-router-flux';
import login from './../../containers/android/Login';
import main from './../../components/android/Main';
import routeReducerCreator from './../../reducers/routeReducerCreator';
import helper from './../../utils/helper'
import store from './../../store/store';

class App extends React.Component {
    constructor(props) {
        super(props);
        helper.bindMethod(this);
    }

    render() {
        return (
            <Provider store={store}>
                <Router createReducer={routeReducerCreator}>
                    <Scene key="modal" component={Modal}>
                        <Scene key="root" hideNavBar hideTabBar>
                            <Scene key="loginModule" direction="vertical" initial={true}>
                                <Scene key="login" component={login} title="Login"
                                       hideNavBar/>
                            </Scene>
                            <Scene key="main" direction="vertical" component={main} title="Main"
                                   hideNavBar/>
                        </Scene>
                        <Scene key="error" component={Error}/>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}

export default App;