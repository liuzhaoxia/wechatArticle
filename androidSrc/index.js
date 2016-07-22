/**
 * Created by xujie3949 on 2016/7/21.
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import PageOne from './PageOne';
import PageTwo from './PageTwo';

class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
                    <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
                </Scene>
            </Router>
        )
    }
}

export default App;
