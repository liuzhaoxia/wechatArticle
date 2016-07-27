/**
 * Created by wangtun on 2016/7/21.
 */
import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
});

class Main extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Main page: {this.props.data}</Text>
                <Button onPress={Actions.pop}>Back</Button>
            </View>
        );
    }
}

export default Main;