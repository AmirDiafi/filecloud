const express = require('express')
const router = express.Router()
const getPostsController = require('../controlers/getPostsController')
const location = process.location
router.get(`/posts/api/:limit`, getPostsController.getPosts)

module.exports = router