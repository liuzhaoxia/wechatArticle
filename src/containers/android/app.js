/**
 * Created by wangtun on 2016/7/21.
 */
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router, Scene, Modal } from 'react-native-router-flux';
import login from './../../containers/android/Login';
import ListView from './../../containers/android/ListView';
import ImagePicker from './../../containers/android/ImagePicker';
import main from './../../components/android/Main';
import routeReducerCreator from './../../reducers/routeReducerCreator';
import helper from './../../utils/helper'
import store from './../../store/store';
import ArticleInfo from './../../containers/android/MessInfo'


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
                                <Scene key="login" component={ImagePicker} title="Login"
                                       hideNavBar/>
                            </Scene>
                            <Scene key="main" direction="vertical" component={main} title="Main"
                                   hideNavBar/>
                            <Scene key="ListView" direction="vertical" component={ListView} title="ListView"
                                                       hideNavBar/>
                            <Scene key="ArticleInfo" direction="vertical" component={ArticleInfo} title="ArticleInfo"
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