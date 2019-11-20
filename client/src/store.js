/**
 * Description.
 *
 * @author zhengchengc <z@chenzhengcheng.com>
 * @since 16:00 20 Nov 2019
 */

import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer , initialState, applyMiddleware(...middleware));

export default store;