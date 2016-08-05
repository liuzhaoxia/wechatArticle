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
import { connect } from 'react-redux';
//简单封装一个组件
class CustomButton extends React.Component {
    render() {

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
            maxText: '选择日期,不能比今日再晚',
            presetText: '选择日期,指定2016/3/5',
            infoData:this.props.infoData
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            infoData:nextProps.infoData
        });

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
            this.setState(newState);
            let dateF=this.state.minText;
            let arr=dateF.split("/");
            if(arr[1]<10){
                arr[1]=0+arr[1];
            }
            if(arr[2]<10){
                arr[2]=0+arr[2];
            }
            dateF=arr[0]+"/"+arr[1]+"/"+arr[2];
            this.state.infoData.date=dateF;
        } catch (message) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }

    render() {
        let date=null;
        let dateF=null;
        if(this.state.minText){
            dateF=this.state.minText;
            let arr=dateF.split("/");
            if(arr[1]<10){
                arr[1]=0+arr[1];
            }
            if(arr[2]<10){
                arr[2]=0+arr[2];
            }
            dateF=arr[0]+"/"+arr[1]+"/"+arr[2];
            return (
                <View>
                    <CustomButton text={dateF}
                                  onPress={this.showPicker.bind(this, 'min', {date: this.state.minDate,minDate:this.state.minDate})}/>
                </View>
            );
        }else{
            if(this.props.Times==null){
                date=new Date();
                dateF=date.toLocaleDateString();
                let arr1=dateF.split("/");
                if(arr1[1]<10){
                    arr1[1]=0+arr1[1];
                }
                if(arr1[2]<10){
                    arr1[2]=0+arr1[2];
                }
                dateF=arr1[0]+"/"+arr1[1]+"/"+arr1[2];
            }else{
                let nowtime2=this.props.Times;
                let m=null;
                if(parseInt(nowtime2.substring(5,7))-1<10){
                    m=0+""+parseInt(nowtime2.substring(5,7))-1;
                }else{
                    m=parseInt(nowtime2.substring(5,7))-1;
                }
                date=new Date(nowtime2.substring(0,4),m,parseInt(nowtime2.substring(8,10))+1);
                dateF=date.toLocaleDateString();
                let arr2=dateF.split("/");
                if(arr2[1]<10){
                    arr2[1]=0+arr2[1];
                }
                if(arr2[2]<10){
                    arr2[2]=0+""+(arr2[2]-1);
                }
                dateF=arr2[0]+"/"+arr2[1]+"/"+arr2[2];
            }



            return (
                <View>
                    <CustomButton text={dateF}
                                  onPress={this.showPicker.bind(this, 'min', {date: date,minDate:date})}/>
                </View>
            );
        }


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

function mapStateToProps(state) {
    return {
        infoData:state.articleInfoReducer.infoData
    }
}


export default connect(
    mapStateToProps,
    null
)(DataPickerDemo)
