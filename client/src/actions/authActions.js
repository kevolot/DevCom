/*
 * Filename: /Users/z/Documents/dev/DevCom/client/src/actions/authActions.js
 * Path: /Users/z/Documents/dev/DevCom/client
 * Created Date: Saturday, November 23rd 2019, 10:42:18 am
 * Author: zhengchengc
 * 
 * Copyright (c) 2019 Your Company
 */

import { TEST_DISPATCH } from "./types"

 // Register User
 export const registeruser = (userData) => {
   return { 
     type: TEST_DISPATCH,
     payload: userData
   };
 };