/**
 * Description.
 *
 * @author zhengchengc <z@chenzhengcheng.com>
 * @since 09:26 12 Nov 2019
 */

const isEmpty = value =>
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0);

module.exports = isEmpty;
