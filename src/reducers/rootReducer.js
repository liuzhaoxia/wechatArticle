/**
 * Created by wangtun on 2016/7/21.
 */
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import listViewReducer from './listViewReducer';
// ... other reducers

const rootReducer = combineReducers({
    loginReducer,listViewReducer
    // ... other reducers
});

export default rootReducer;