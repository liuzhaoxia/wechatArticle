/**
 * Created by wangtun on 2016/7/21.
 */
import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import { connect } from 'react-redux'
import Button from "react-native-button";
import { login } from '../actions/loginAction'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});


const Login = (props) => {
    const {login} = props;
    return (
        <View style={[styles.container, {backgroundColor:"gray"}]}>
            <Text>Login page: </Text>
            <Button onPress={login}>-cccccc</Button>
        </View>
    );
}

export default connect(
    (state) => ({
        logined: state.Login.logined
    }),
    (dispatch) => ({
        login: () => dispatch(login.login())
    })
)(Login)
