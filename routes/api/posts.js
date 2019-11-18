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
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validatePostInput = require('../../validation/post');

// @route  GET api/posts/test
// @desc   Tests posts route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Posts router works!"}));

// @route  GET api/posts
// @desc   Get post
// @access Public
router.get('/', (req, res) => {
    Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostfound: 'No posts found' }));
});

// @route  GET api/posts/:id
// @desc   Get post by id
// @access Public
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostfound: 'No post found with that ID' }));
});

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
});

// @route  DELETE api/posts
// @desc   Create post
// @access Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
        Post.findById(req.params.id).then(post => {
            // Check for post owner
            if(post.user.toString() !== req.user.id) {
                return res.status(401).json({ notauthorized: 'User not authorized' });
            }

            // Delete
            post.remove().then(() => res.json({ success: true }));
        }).catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    })
})

module.exports = router;