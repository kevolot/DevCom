/**
 * Description.
 *
 * @author zhengchengc <z@chenzhengcheng.com>
 * @since 20:34 11 Nov 2019
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model('users', UserSchema);