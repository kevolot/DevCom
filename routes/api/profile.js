/**
 * Description.
 *
 * @author zhengchengc <z@chenzhengcheng.com>
 * @since 19:50 11 Nov 2019
 */

const express = require('express');
const router = express.Router();

// @route  GET api/profile/test
// @desc   Tests profile route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Profile router works!"}));

module.exports = router;