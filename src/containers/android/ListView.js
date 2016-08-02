/**
 * Created by zhaohang on 2016/7/25.
 */
import React ,{Component}from 'react';
import {View, Text, StyleSheet,TextInput,Image,ListView,TouchableHighlight} from "react-native";
import { connect } from 'react-redux'
import Button from "react-native-button";
import Swipeout  from "react-native-swipeout";
import listViewActions from '../../actions/listViewActions'
import  {bindActionCreators} from 'redux'
const styles = StyleSheet.create({
    row: {
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        flexDirection: 'row',
        padding: 5
    },
    thumb: {
        width: 56,
        height: 56
    },
    title: {
        marginTop: 8,
        marginLeft: 3,
        width:300,
        color: 'black',
        flex: 1
    },
    desc: {
        marginTop: 8,
        marginLeft: 3
    }
});
class listView extends Component {
    constructor(props) {
        super(props);
        //let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            pageNum:1
        };
        this.getAllList = this.getAllList.bind(this);
        this.pressRow = this.pressRow.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
        });
    }re

    componentWillMount() {
        //控件加载的时候先发起服务请求
        this.props.getListRequest(1);
    }
    pressRow(id) {
        this.props.toDesOfList(id);
    }
    getAllList() {
        const pageNum = this.state.pageNum;

        const pageTotal = Math.ceil(this.props.state.totalNum/10);
        if (pageNum<pageTotal) {
            this.state.pageNum = pageNum+1;
            this.setState({pageNum: this.state.pageNum});
            this.props.getListRequest(pageNum+1);
        }

    }
    render() {
        let data = this.props.state.listData;
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let dataSource = ds.cloneWithRows(data);
        return (
            <ListView  enableEmptySections = {true} onEndReached = {this.getAllList} onEndReachedThreshold = {20}
                       dataSource={dataSource}
                       renderRow={(rowData) =>
                 <Swipeout right={[{text:'删除',backgroundColor:'red'}]} backgroundColor={'#FFF'}>
                 <TouchableHighlight onPress={() => this.pressRow(rowData.id)}>
                <View style={styles.row}>
                    <View>
                        <Image style={styles.thumb} source={{uri:rowData.image}} />
                    </View>
                    <View>
                        <View>
                             <Text style={styles.title} numberOfLines ={1}>
                                  {rowData.title}
                             </Text>
                        </View>
                        <View>
                             <Text style={styles.desc}>
                                  {rowData.author}  {rowData.date}
                             </Text>
                        </View>
                    </View>
                </View>
                </TouchableHighlight>
            </Swipeout>


            }
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        state:state.listViewReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(listViewActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(listView)
