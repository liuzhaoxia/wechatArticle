/**
 * Created by 123 on 2016/7/29.
 */
import { handleActions } from 'redux-actions'
import articleInfoActions  from '../actions/articleInfoActions'
import {ListView} from "react-native";

const initialState = {
    infoData:{
        title:'',
        url:'',
        author:'',
        date:new Date(),
        type:1,
        image:''
    }
};

const articleInfoReducer = handleActions({
    [articleInfoActions.setArticleData]: (state, action) => {
        state = Object.assign({}, state);
        state.infoData = action.payload[0];
        return state;
    }

}, initialState);

export default articleInfoReducer;