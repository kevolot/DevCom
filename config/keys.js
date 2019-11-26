/**
 * Description.
 *
 * @author zhengchengc <z@chenzhengcheng.com>
 * @since 00:01 12 Nov 2019
 */

if(process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
}