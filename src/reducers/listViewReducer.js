/**
 * Created by zhaohang on 2016/7/28.
 */
import { handleActions } from 'redux-actions'
import listViewActions  from '../actions/listViewActions'
import {ListView} from "react-native";
const initialState = {
    listData :[],
    totalNum : 0
};

const loginReducer = handleActions({
    [listViewActions.setListView]: (state, action) => {
        state = Object.assign({}, state);
        const oriData = state.listData;
        state.listData = oriData.concat(action.payload.data);
        state.totalNum = action.payload.totalNum;
        return state;
    }

}, initialState);

export default loginReducer;