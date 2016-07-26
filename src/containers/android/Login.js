/**
 * Created by wangtun on 2016/7/21.
 */
import React from 'react';
import {View, Text, StyleSheet,TextInput,Image} from "react-native";
import { connect } from 'react-redux'
import Button from "react-native-button";
import loginActions from '../../actions/loginActions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B3745'
    },
    driver: {
        borderBottomColor:'#E0E0E0',
        borderBottomWidth:1,
        backgroundColor: '#2B3745',
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 10,
        marginRight:10
    },
    driver1: {
        backgroundColor: '#2B3745',
        justifyContent: 'center',
        borderRadius: 6,
        marginLeft: 10,
        marginRight:10
    },
    textinput: {
        flex: 1,
        borderBottomColor:'#FFFFFF',
        borderBottomWidth:1,
        color: '#FFFFFF',
        fontSize: 16
    },
    buttonview: {
        backgroundColor: '#1DBAF1',
        margin: 20,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logintext: {
        fontSize: 17,
        color: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10
    },
    loginName: {
        fontSize: 17,
        alignSelf: 'center',
        color: '#FFFFFF'
    },
    avatarview: {
        height: 150,
        justifyContent: 'center'
    },
    avatarimage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius:126
    },
});


const Login = (props) => {
    const {login} = props.actions;
    return (
        <View style={styles.container}>
            <View style={styles.avatarview}>
                <Image source={require('../../image/logo.png')} style={styles.avatarimage}/>
                <Text style={styles.loginName} >电 桩</Text>
            </View>
            <View style={styles.driver}>
                <TextInput placeholder="请输入用户名" placeholderTextColor ='#E0E0E0'  style={styles.textinput} underlineColorAndroid='transparent'
                           keyboardType = 'default'>
                </TextInput>
            </View>
            <View style={styles.driver1}>
                <TextInput placeholder="请输入密码" placeholderTextColor ='#E0E0E0' style={styles.textinput} underlineColorAndroid='transparent'
                           secureTextEntry  ={true} keyboardType = 'default'>
                </TextInput>
            </View>
            <View style={styles.buttonview}>
                <Text style={styles.logintext} >登 录</Text>
            </View>
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
