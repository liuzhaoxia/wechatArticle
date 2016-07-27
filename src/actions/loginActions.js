/**
 * Created by wangtun on 2016/7/21.
 */
import { createAction } from 'redux-actions';
import loginActionEnum from '../constants/loginActionEnum'
import {api} from '../apis/api'
const loginActions = {
    login: createAction(loginActionEnum.LOGIN_REQUEST),
    loginRequest: (data)=> {
        return dispatch=> {
            api.login(data)
                .then(response=> {
                    if (response.ok) {
                        return response;
                    } else {
                        console.warn("出错了");
                    }
                })
                .then(response=>response.json())
                .then(jsonResult=> {
                    if (jsonResult.errcode === 0) {
                        console.warn(jsonResult.data);
                    } else {
                        console.warn(jsonResult.errmsg);
                    }
                })
                .catch(error=> {
                    console.warn(error);
                });
        }
    },
};

export default loginActions;