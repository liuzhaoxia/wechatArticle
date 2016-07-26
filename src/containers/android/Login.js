/**
 * Created by wangtun on 2016/7/21.
 */
import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import { connect } from 'react-redux'
import Button from "react-native-button";
import loginActions from '../../actions/loginActions'

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
    const {login} = props.actions;
    return (
        <View style={[styles.container, {backgroundColor:"gray"}]}>
            <Text>Login page: </Text>
            <Button onPress={login}>-cccccc</Button>
        </View>
    );
};

function mapStateToProps(state) {
    return {
        state:{
            logined: state.loginReducer.logined
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions:{
            login:() => dispatch(loginActions.login())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
