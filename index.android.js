/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
var ProgressBar = require('ProgressBarAndroid');
import {
  AppRegistry,
  StyleSheet,
  Text,
  Modal,
  Image,
  TextInput,
  ProgressBarAndroid,
  View
} from 'react-native';

class AndroidProject extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: "",modalVisible:false,transparent:true};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        this.setState({modalVisible:!this.state.modalVisible})
    }

  render() {
      const modalBackgroundStyle = {
          backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
      }
      const innerContainerTransparentStyle = this.state.transparent
          ? {backgroundColor: '#e5e5e5', padding: 20,width:150}
          : null
    return (
        <View style={{paddingLeft:10,paddingRight:10,backgroundColor:'#E8E8E8'}}>
            <View>
               <Image source={require('./Image/qq.png')} style={styles.style_image}/>
            </View>
            <View style={styles.style_user_input}>
                <TextInput placeholder='用户名' underlineColorAndroid='transparent' placeholderTextColor='gray' style={{height: 40, borderColor: 'gray', borderWidth: 1,textAlign:'center'}}>
                </TextInput>
            </View>
            <View style={styles.style_pwd_input}>
                <TextInput placeholder='密  码' underlineColorAndroid='transparent' secureTextEntry={true} placeholderTextColor='gray' style={{height: 40, borderColor: 'gray', borderWidth: 1,textAlign:'center'}}>
                </TextInput>
            </View>
            <View style={styles.style_login_container} >
                <Text onPress={this.handleSubmit} style={styles.style_login_text}>登 录</Text>
            </View>


            <Modal
                animationType='none'
                transparent={this.state.transparent}
                visible={this.state.modalVisible}
                onRequestClose={this.handleSubmit}
            >
                <View style={[styles.container, modalBackgroundStyle]}>
                    <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                        <View>
                            <ProgressBar />
                        </View>
                        <Text onPress={this.handleSubmit} style={{marginTop:10}}>
                            关闭
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
  },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    style_user_input:{
        backgroundColor:'#fff',
        marginTop:20,
        height:35,
        borderRadius:5,
    },
    style_pwd_input:{
        backgroundColor:'#fff',
        height:35,
        marginTop:10,
        borderRadius:5,
    },
    style_image:{
        borderRadius:35,
        height:70,
        width:70,
        marginTop:40,
        alignSelf:'center',
    },
    style_login_container:{
        backgroundColor:'green',
        borderRadius:5,
        height:35,
        marginTop:10
    },
    style_login_text:{
        textAlign:'center',
        color:"#FFF",
        height:35,
        textAlignVertical:'center'
    }
});

AppRegistry.registerComponent('AndroidProject', () => AndroidProject);
