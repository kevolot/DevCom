import { TEST_DISPATCH } from "../actions/types";

/**
 * Description.
 *
 * @author zhengchengc <z@chenzhengcheng.com>
 * @since 16:05 20 Nov 2019
 */

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch(action.type) {
        case TEST_DISPATCH:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}