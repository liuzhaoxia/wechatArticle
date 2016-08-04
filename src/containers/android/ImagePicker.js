/**
 * Created by zhaohang on 2016/8/2.
 */
import React ,{Component}from 'react';
import {View, Text, StyleSheet,TextInput,Image,ListView,TouchableHighlight,Platform} from "react-native";
import { connect } from 'react-redux'
import Button from "react-native-button";
import ImagePicker  from "react-native-image-picker";
import  {bindActionCreators} from 'redux'
import listViewActions from '../../actions/listViewActions'
const styles = StyleSheet.create({
    thumb: {
        width: 56,
        height: 56
    }
});
class imagePicker extends Component {
    constructor(props) {
        super(props);
        //let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            avatarSource: null
        };
        this.test = this.test.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({});
    }

    componentWillMount() {

    }

    test() {
        const options = {
            title: 'Select Avatar',
            customButtons: {
                'Choose Photo from Facebook': 'fb',
            },
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // You can display the image using either data...
                const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

                // or a reference to the platform specific asset location
                if (Platform.OS === 'ios') {
                    const source = {uri: response.uri.replace('file://', ''), isStatic: true};
                } else {
                    const source = {uri: response.uri, isStatic: true};
                }

                console.log(source)
                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    render() {
        if(this.state.avatarSource!=null){
            console.log(this.state.avatarSource.uri);
        }

        return (
            <View>
                <Text onPress={this.test}>选择图片</Text>
                <Image source={this.state.avatarSource} style={styles.thumb}/>
            </View>

        )


    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(listViewActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(imagePicker)
