/**
 * Created by zhaohang on 2016/7/28.
 */
import { handleActions } from 'redux-actions'
import listViewActions  from '../actions/listViewActions'
import {ListView} from "react-native";
const initialState = {
    listData :[]
};

const loginReducer = handleActions({
    [listViewActions.setListView]: (state, action) => {
        state = Object.assign({}, state);
        state.listData = action.payload;
        return state;
    }

}, initialState);

export default loginReducer;