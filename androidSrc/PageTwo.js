/**
 * Created by xujie3949 on 2016/7/21.
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class PageTwo extends Component {
    render() {
        return (
            <View style={{margin: 128}}>
                <Text>This is PageTwo!</Text>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

export default PageTwo;
