/*
 * Filename: /Users/z/Documents/dev/DevCom/client/src/validation/is-empty.js
 * Path: /Users/z/Documents/dev/DevCom/client
 * Created Date: Sunday, November 24th 2019, 11:42:49 pm
 * Author: zhengchengc
 * 
 * Copyright (c) 2019 Your Company
 */


const isEmpty = value =>
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0);

export default isEmpty;