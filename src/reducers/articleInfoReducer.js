/**
 * Created by 123 on 2016/7/29.
 */
import { handleActions } from 'redux-actions'
import articleInfoActions  from '../actions/articleInfoActions'
import {ListView} from "react-native";

const initialState = {
    infoDataId :114,
    infoData:[]
};

const articleInfoReducer = handleActions({
    [articleInfoActions.setArticleId]: (state, action) => {
        state = Object.assign({}, state);
        state.infoDataId = action.payload;
        return state;
    },
    [articleInfoActions.setArticleData]: (state, action) => {
        state = Object.assign({}, state);
        state.infoData = action.payload;
        return state;
    }

}, initialState);

export default articleInfoReducer;