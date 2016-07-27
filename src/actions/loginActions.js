/**
 * Created by wangtun on 2016/7/21.
 */
import { createAction } from 'redux-actions';
import loginActionEnum from '../constants/loginActionEnum'
import {api, callApi} from '../apis/api'
const loginActions = {
    login: createAction(loginActionEnum.LOGIN_REQUEST),
    loginRequest: (parameter)=> {
        return dispatch=> {
            callApi(
                api.login(parameter),
                (data)=>console.warn(data),
                (err)=>console.warn(err)
            );
        }
    }
};

export default loginActions;