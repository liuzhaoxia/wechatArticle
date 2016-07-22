/**
 * Created by wangtun on 2016/7/21.
 */
import { combineReducers } from 'redux';
import routes from './routes';
import Login from './Login'
// ... other reducers

export default combineReducers({
    routes,
    Login,
    // ... other reducers
});