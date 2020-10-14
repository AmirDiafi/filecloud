const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const postsController = require('../controlers/postsContoller')

router.post('/post', 
    bodyParser.urlencoded({extended:true}),
        postsController.postPosts
    )

module.exports = router