/**
 * Description.
 *
 * @author zhengchengc <z@chenzhengcheng.com>
 * @since 19:50 11 Nov 2019
 */

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const router = express.Router();

// Post model
const Post = require('../../models/Post');

// Validation
const validatePostInput = require('../../validation/post');

// @route  GET api/posts/test
// @desc   Tests posts route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Posts router works!"}));

// @route  POST api/posts
// @desc   Create post
// @access Private
reouter.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if(!isValid) {
        // If any errors, send 400 with errors object
        return res.this.status(400).json(errors);
    }

    const newPost = new Post ({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
    });

    newPost.save().then(post => res.json(post));
})

module.exports = router;