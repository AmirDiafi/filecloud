const express = require('express')
const path = require('path')
const app = express()
const postsRouter = require('./server/routers/postsRouter')
const getPostsRouter = require('./server/routers/getPostsRouter')

app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.static(path.join(__dirname, 'public')))


app.use(postsRouter)
app.use(getPostsRouter)
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})
const port = process.env.PORT || 5000
app.listen(port)
console.log('App is Listening on port: '+port);