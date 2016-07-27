/**
 * Created by 123 on 2016/7/25.
 */

import React, { Component } from 'react';
import {View, Text,TextInput,ListView ,StyleSheet,Picker} from "react-native";
import DataPickerDemo from './CustomButton'
import Button from "react-native-button";

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        padding: 5,
        height:30
    },
    textTitle:{
        width:60,
        height:30
    },
    inputText:{
        flex:1,
        width:200
    }
});
class MessInfo extends React.Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        this.state={language:""};
    }
    render(){
        return (
            <View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.textTitle}>文章名称</Text>
                    </View>
                    <View >
                        <TextInput style={styles.inputText}></TextInput>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text style={styles.textTitle}>文章链接</Text>
                    </View>
                    <View >
                        <TextInput style={styles.inputText}></TextInput>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.textTitle}>文章类型</Text>
                    </View>
                    <View>
                        <Picker style={styles.inputText}
                            selectedValue={this.state.language}
                            onValueChange={(lang) =>this.setState({language: lang})}>
                            <Picker.Item label="测试" value="test" />
                            <Picker.Item label="开发" value="js" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.textTitle}>作者</Text>
                    </View>
                    <View>
                        <TextInput style={styles.inputText}></TextInput>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.textTitle}>时间</Text>
                    </View>
                    <View>
                        <DataPickerDemo style={styles.inputText}/>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.textTitle}>图片文章</Text>
                    </View>
                    <View>
                        <Button >选择图片</Button>
                    </View>
                </View>

            </View>
        )
    }

}

export default MessInfo;
