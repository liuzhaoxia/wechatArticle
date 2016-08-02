/**
 * Created by zhaohang on 2016/7/28.
 */

import { createAction } from 'redux-actions';
import listViewActionEnum from '../constants/listViewActionEnum'
import { api, callApi } from '../apis/api'
import { Actions } from "react-native-router-flux";
import articleInfoAction from './articleInfoActions'
const listViewActions = {
    setListView:createAction(listViewActionEnum.SET_LIST_VIEW),
    toDesOfList: (data)=> {
        return dispatch=> {
            let p={tableName:"article",condition:"id = "+data};
            dispatch(
                articleInfoAction.getArticleInfoById(p)

            );
        }
    },
    getListRequest: (data)=> {
        return dispatch=> {
            callApi(
                api.allList(data),
                (data)=>dispatch(listViewActions.requestListSuccess(data)),
                (err)=>console.warn(err)
            );
        }
    },
    requestListSuccess: (data)=> {
        return dispatch=> {
            dispatch(
                listViewActions.setListView(data)
            );
        }
    }
};

export default listViewActions;