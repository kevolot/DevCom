/**
 * Description.
 *
 * @author zhengchengc <z@chenzhengcheng.com>
 * @since 19:49 11 Nov 2019
 */

const express = require('express');
const router = express.Router();

// @route  GET api/users/test
// @desc   Tests users route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Users router works!"}));

module.exports = router;