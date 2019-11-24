import { GET_ERRORS } from "../actions/types";

/**
 * Description.
 *
 * @author zhengchengc <z@chenzhengcheng.com>
 * @since 16:05 20 Nov 2019
 */

const initialState = {};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload
        default:
            return state;
    }
}