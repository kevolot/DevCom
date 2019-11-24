/*
 * Filename: /Users/z/Documents/dev/DevCom/client/src/reducers/errorReducer.js
 * Path: /Users/z/Documents/dev/DevCom/client
 * Created Date: Sunday, November 24th 2019, 4:05:54 pm
 * Author: zhengchengc
 * 
 * Copyright (c) 2019 Your Company
 */

import { GET_ERRORS } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  switch(action.type) {
      case GET_ERRORS:
          return action.payload;
      default:
          return state;
  }
}