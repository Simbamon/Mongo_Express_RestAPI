const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
const Name = require('../models/Name');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error })
    }
})

router.get('/names', async (req, res) => {
    try {
        const name = await Name.find()
        res.json(name)
    } catch (error) {
        res.json({ message: error })
    }
})

router.post('/names', async (req, res) => {
    const name = new Name({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: req.body.number
    })
    try {
        const savedPost = await name.save()
        res.json(savedPost)
    }
    catch(err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    }
    catch(err) {
        res.json({ message: err })
    }
})

router.get('/:postID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID)
        res.json(post)
    } catch (error) {
        res.json({ message: err })
    }
})

router.delete('/:postID', async (req, res) => {
    try {
        const removedPost = await Post.delete({_id: req.params.postID})
        res.json(removedPost)
    } catch (error) {
        res.json({ message: err })
    }
})

router.patch('/:postID', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postID }, 
            { $set: {title: req.body.title} }
        )
        res.json(updatedPost)
    } catch (error) {
        res.json({ message: err })
    }
})

module.exports = router;