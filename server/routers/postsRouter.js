const express = require('express')
const router = express.Router()
const postsController = require('../controlers/postsContoller')

router.post('/post', postsController.postPosts)

module.exports = router