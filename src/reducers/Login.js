/**
 * Created by wangtun on 2016/7/21.
 */
import { handleActions } from 'redux-actions'
import { login } from '../actions/loginAction'

const initialState = {
    logined: false,
}

//you can do better here, I was just showing that you need to make a new copy
//of state. It is ok to deep copy of state. It will prevent unseen bugs in the future
//for better performance you can use immutableJS

//handleActions is a helper function to instead of using a switch case statement,
//we just use the regular map with function state attach to it.

export default handleActions({
    [login.login]: (state, action) => {
        return {
            ...state,
            logined: true,
        }
    },
}, initialState)