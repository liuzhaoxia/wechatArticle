/**
 * Created by wangtun on 2016/7/21.
 */
import { createAction } from 'redux-actions';
import loginActionEnum from '../constants/loginActionEnum'

const loginActions = {
    login: createAction(loginActionEnum.LOGIN_REQUEST)
};

export default loginActions;