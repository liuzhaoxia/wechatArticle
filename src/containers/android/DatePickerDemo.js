/**
 * Created by 123 on 2016/8/1.
 */
import React, {Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    DatePickerIOS,
    TextInput,
} from 'react-native';
class DatePickerExample  extends Component{
    constructor(props){
        super(props);

        this.state={
            date: new Date(),
            timeZoneOffsetInHours: new Date(2020, 4, 5),
            simpleText: '选择日期,默认今天',
            minText: '选择日期,不能比今日再早',
            maxText: '选择日期,不能比今日再晚',
            presetText: '选择日期,指定2016/3/5',
        };
    }

    getDefaultProps() {
        return {
            date: new Date(),
            timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
        };
    }

    getInitialState() {
        return {
            date: this.props.date,
            timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
        };
    }

    onDateChange(date) {
        this.setState({date: date});
    }

    onTimezoneChange(event) {
        var offset = parseInt(event.nativeEvent.text, 10);
        if (isNaN(offset)) {
            return;
        }
        this.setState({timeZoneOffsetInHours: offset});
    }

    render() {
        // Ideally, the timezone input would be a picker rather than a
        // text input, but we don't have any pickers yet :(
        return (
            <View>
                <WithLabel label="Value:">
                    <Text>{
                        this.state.date.toLocaleDateString() +
                        ' ' +
                        this.state.date.toLocaleTimeString()
                    }</Text>
                </WithLabel>
                <WithLabel label="Timezone:">
                    <TextInput
                        onChange={this.onTimezoneChange}
                        style={styles.textinput}
                        value={this.state.timeZoneOffsetInHours.toString()}
                    />
                    <Text> hours from UTC</Text>
                </WithLabel>
                <Heading label="Date + time picker" />
                <DatePickerIOS
                    date={this.state.date}
                    mode="datetime"
                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                    onDateChange={this.onDateChange}
                />
                <Heading label="Date picker" />
                <DatePickerIOS
                    date={this.state.date}
                    mode="date"
                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                    onDateChange={this.onDateChange}
                />
                <Heading label="Time picker, 10-minute interval" />
                <DatePickerIOS
                    date={this.state.date}
                    mode="time"
                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                    onDateChange={this.onDateChange}
                    minuteInterval={10}
                />
            </View>
        );
    }
};

export default DatePickerExample;
class WithLabel extends React.Component{
    render() {
        return (
            <View style={styles.labelContainer}>
                <View style={styles.labelView}>
                    <Text style={styles.label}>
                        {this.props.label}
                    </Text>
                </View>
                {this.props.children}
            </View>
        );
    }
}

class Heading  extends React.Component{
    render(){
        return (
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>
                    {this.props.label}
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    textinput: {
        height: 26,
        width: 50,
        borderWidth: 0.5,
        borderColor: '#0f0f0f',
        padding: 4,
        fontSize: 13,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    labelView: {
        marginRight: 10,
        paddingVertical: 2,
    },
    label: {
        fontWeight: '500',
    },
    headingContainer: {
        padding: 4,
        backgroundColor: '#f6f7f8',
    },
    heading: {
        fontWeight: '500',
        fontSize: 14,
    },
});