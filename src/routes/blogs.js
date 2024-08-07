const express = require('express');
const Blog = require('../models/blog.js');
const router = express.Router();

router.post('/', async (req, res) => {
    const { title, description, tags, imageUrl, authorName } = req.body;

    const slug = title.toLowerCase().split(' ').join('-');

    const blog = new Blog({
        title,
        description,
        tags,
        imageUrl,
        authorName,
        slug
    })

    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ 
            message: "Error in fetching blogs",
        });
    }
})

router.get('/:slug', async (req, res) => {
    try {
        const blog = await Blog.findOne({ slug: req.params.slug });
        if (!blog) {
            return res.status(404).json({ error: 'No blog found' });
        }
        res.status(200).json({
            blog
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;