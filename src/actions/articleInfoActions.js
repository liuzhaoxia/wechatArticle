/**
 * Created by 123 on 2016/7/29.
 */
import { createAction } from 'redux-actions';
import articleInfoActionEnum from '../constants/articeInfoActionEnum'
import { api, callApi } from '../apis/api'
import { Actions } from "react-native-router-flux";

const articleInfoActions = {
    setArticleId:createAction(articleInfoActionEnum.SET_ARTICLEID_INFO),
    setArticleData:createAction(articleInfoActionEnum.SET_ARTICLEDATA),
    getArticleInfoById: (data)=> {
        return dispatch=> {
            callApi(
                api.getArticleInfo(data),
                (data)=>dispatch(articleInfoActions.getArticleInfoRequest(data)),
                (err)=>console.warn(err)
            );
        }
    },
    getArticleInfoRequest: (data)=> {
        return dispatch=> {
            dispatch(
                articleInfoActions.setArticleData(data)
            );
            dispatch(Actions.ArticleInfo());
        }
    },
    updateArticleInfoById: (data)=> {
        return dispatch=> {
            callApi(
                api.updateArticleInfo(data),
                (data)=>dispatch(articleInfoActions.getArticleInfoSusscesssRequest(data)),
                (err)=>console.warn(err)
            );
        }
    },
    getArticleInfoSusscesssRequest:(data)=>{
        return dispatch=>{
            console.warn("操作成功")
        }
    },
    addArticleInfoById: (data)=> {
        return dispatch=> {
            callApi(
                api.addArticleInfo(data),
                (data)=>dispatch(articleInfoActions.getArticleInfoSusscesssRequest(data)),
                (err)=>console.warn(err)
            );
        }
    },
    backListView:()=>{
        return dispatch=>{
            dispatch(Actions.ListView());
        }
    }


}

export default articleInfoActions;