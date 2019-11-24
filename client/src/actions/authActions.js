/*
 * Filename: /Users/z/Documents/dev/DevCom/client/src/actions/authActions.js
 * Path: /Users/z/Documents/dev/DevCom/client
 * Created Date: Saturday, November 23rd 2019, 10:42:18 am
 * Author: zhengchengc
 * 
 * Copyright (c) 2019 Your Company
 */
import axios from 'axios';

import { GET_ERRORS } from "./types"

 // Register User
export const registerUser = (userData, history) => dispatch => {
  axios.post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};