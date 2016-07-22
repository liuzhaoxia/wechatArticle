/**
 * Created by wangtun on 2016/7/21.
 */
import { createAction } from 'redux-actions';
import actionEnum from '../constants/actionEnum'

export const login={
    login:createAction(actionEnum.LOGIN_REQUEST)
}