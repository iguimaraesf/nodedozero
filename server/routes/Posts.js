const express = require('express')
const router = express.Router()
const { Posts } = require('../models')

router.get('/', async (req, res) => {
    const listaDePosts = await Posts.findAll()
    res.json(listaDePosts)
})

router.post('/', async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post); 
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post)
})

module.exports = router
