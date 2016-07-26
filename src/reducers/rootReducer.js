/**
 * Created by wangtun on 2016/7/21.
 */
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
// ... other reducers

const rootReducer = combineReducers({
    loginReducer
    // ... other reducers
});

export default rootReducer;