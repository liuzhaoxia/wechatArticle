/**
 * Created by 123 on 2016/7/25.
 */
import React, {Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    DatePickerAndroid,
    TouchableHighlight,
} from 'react-native';
//简单封装一个组件
class CustomButton extends React.Component {

    render() {
        console.log(this.props.text);
        return (
            <TouchableHighlight
                style={styles.button}
                 underlineColorAndroid='transparent'
                onPress={this.props.onPress}>
                <Text ref="pickerDate" style={styles.dateT}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}
class DataPickerDemo extends Component {
    constructor(props){
        super(props);

        this.state={
            presetDate: new Date(2016, 3, 5),
            allDate: new Date(2020, 4, 5),
            simpleText: '选择日期,默认今天',
            minText: '选择日期,不能比今日再早',
            maxText: '选择日期,不能比今日再晚',
            presetText: '选择日期,指定2016/3/5',
        };
    }
    //进行创建时间日期选择器
    async showPicker(stateKey, options) {
        try {
            var newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            console.log(newState);
            this.setState(newState);
        } catch (message) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }

    render() {
        let nowtime2=this.props.Times;
        let date=new Date(nowtime2.substring(0,4),nowtime2.substring(5,7)-1,nowtime2.substring(8,10)).toLocaleDateString();
            console.log(date);
        return (
            <View>
                <CustomButton text={date}
                              onPress={this.showPicker.bind(this, 'min', {date: date,minDate:new Date()})}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin:5,
        padding: 7,
        height:30,
        width:240,
        alignSelf: 'center'
    },
    dateT:{
        color:"#FFFFFF"
    }
});

export default DataPickerDemo;
