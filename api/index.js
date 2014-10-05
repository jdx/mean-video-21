var router = require('express').Router()
var bodyParser = require('body-parser')
var Post = require('../models/post')

router.use(bodyParser.json())

router.get('/posts', function (req, res, next) {
  Post.find()
  .sort('-date')
  .exec(function (err, posts) {
    if (err) { next(err) }
    res.json(posts)
  })
})

router.post('/posts', function (req, res, next) {
  var post = new Post({status: req.body.status})
  post.save(function (err) {
    if (err) { next(err) }
    res.status(201).end()
  })
})

router.get('*', function (req, res) {
  res.status(404).end()
})

module.exports = router
