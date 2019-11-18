/*
 * Filename: /Users/heydaykk/Desktop/Desktop - macOS-i7-4770HQ/Development/DevCom/validation/post.js
 * Path: /Users/heydaykk/Desktop/Desktop - macOS-i7-4770HQ/Development/DevCom
 * Created Date: Monday, November 18th 2019, 9:40:22 pm
 * Author: Chen Zhengcheng
 * 
 * Copyright (c) 2019 Your Company
 */

const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
    let errors = {};

    data.text = !isEmpty(data.text) ? data.text : '';

    if (!Validator.isLength(data.text, { min: 10, max: 20 })) {
        errors.text = 'Post must be between 10 and 300 characters';
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = 'Text field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};