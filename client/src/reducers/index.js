/**
 * Description.
 *
 * @author zhengchengc <z@chenzhengcheng.com>
 * @since 16:03 20 Nov 2019
 */

import { combineReducers } from "redux";
import authReducer from './authReducer';
import errorReducer from './errorReducer'

export default combineReducers({
    auth: authReducer,
    errors: errorReducer
});