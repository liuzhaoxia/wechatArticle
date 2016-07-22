/**
 * Created by xujie3949 on 2016/7/21.
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class PageOne extends Component {
    render() {
        const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
        return (
            <View style={{margin: 128}}>
                <Text onPress={goToPageTwo}>This is PageOne!</Text>
            </View>
        )
    }
}

export default PageOne;