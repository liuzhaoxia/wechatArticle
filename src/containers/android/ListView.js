/**
 * Created by zhaohang on 2016/7/25.
 */
import React ,{Component}from 'react';
import {View, Text, StyleSheet,TextInput,Image,ListView} from "react-native";
import { connect } from 'react-redux'
import Button from "react-native-button";
import Swipeout  from "react-native-swipeout";
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
const listView = (props) => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows([{
        url: '../image/logo.png', title: '第四代活塞,谁发的第四代活塞,谁发的第四代活塞,谁发的', author: '张三', data: '2016-01-01'
    }, {
        url: '/src/image/login.png',
        title: '库克将怒火几年级',
        author: 'lily',
        data: '2016-08-08'
    }]);
    return (
        <ListView
            dataSource={dataSource}
            renderRow={(rowData) =>
            <Swipeout right={[{text:'删除',backgroundColor:'red'}]} backgroundColor={'#FFF'}>
                <View style={styles.row}>
                    <View>
                        <Image style={styles.thumb} source={require('../../image/login.png')} />
                    </View>
                    <View>
                        <View>
                             <Text style={styles.title} numberOfLines ={1}>
                                  {rowData.title}
                             </Text>
                        </View>
                        <View>
                             <Text style={styles.desc}>
                                  {rowData.author}  {rowData.data}
                             </Text>
                        </View>
                    </View>
                </View>
            </Swipeout>
            }
        />
    );
}

export default connect(
    (state) => ({
    })
)(listView)
