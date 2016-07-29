/**
 * Created by wangtun on 2016/7/21.
 */
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import listViewReducer from './listViewReducer';
import articleInfoReducer from './articleInfoReducer'
// ... other reducers

const rootReducer = combineReducers({
    loginReducer,listViewReducer,articleInfoReducer
    // ... other reducers
});

export default rootReducer;