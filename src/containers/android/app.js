/**
 * Created by wangtun on 2016/7/21.
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider,connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import login from './../../containers/android/Login';
import ListView from './../../containers/android/ListView';
import login2 from './../../components/android/Login2';
import login3 from './../../components/android/Login3';
import routeReducerCreator from './../../reducers/routeReducerCreator';
import helper from './../../utils/helper'
import { api, callApi } from  './../../apis/api'
import Button from "react-native-button";
import store from './../../store/store';
class App extends React.Component {
    constructor(props) {
        super(props);
        helper.bindMethod(this);
    }

    testApi(){
        const parameter ={userNickName:"mayunfei",userPassword:"test"};
        callApi(
            api.test(parameter),
            (data)=>console.log(data),
            (err)=>console.log(err)
        );
    }

    render () {
        return (
            <Provider store={store}>
                <Router createReducer={routeReducerCreator}>
                    <Scene key="login" direction="vertical" initial={true}>
                        <Scene key="loginModal" direction="vertical" component={login} title="Login" hideNavBar/>
                        <Scene
                            key="loginModal2"
                            hideNavBar
                            component={login2}
                            title="Login2"
                            panHandlers={null}
                            duration={1}
                        />
                        <Scene
                            key="loginModal3"
                            hideNavBar
                            component={login3}
                            title="Login3"
                            panHandlers={null}
                            duration={1}
                        />
                    </Scene>
                </Router>
            </Provider>
        );
        //
        //return(
        //    <Button onPress={this.testApi}>测试服务</Button>
        //);
    }
}

export default App;