/**
 * Created by xujie3949 on 2016/7/25.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer'

const middleware = [thunkMiddleware];
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware)
    )
);

export default store;
