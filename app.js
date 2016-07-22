/**
 * Created by wangtun on 2016/7/21.
 */
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider,connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import login2 from './src/components/Login2';
import login3 from './src/components/Login3';
import login from './src/containers/Login';

import reducers from './src/reducers/index';

const RouterWithRedux = connect()(Router);
const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(
    applyMiddleware(...middleware)
)(createStore)(reducers);


class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="login" direction="vertical" initial={true}>
                        <Scene key="loginModal" direction="vertical" component={login} title="Login" />
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
                </RouterWithRedux>
            </Provider>
        );
    }
}

export default App;