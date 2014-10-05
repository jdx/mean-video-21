var router = require('express').Router()
var bodyParser = require('body-parser')
var Post = require('../models/post')

router.use(bodyParser.json())

router.post('/posts', function (req, res, next) {
  var post = new Post({status: req.body.status})
  post.save(function (err) {
    if (err) { next(err) }
    res.status(201).end()
  })
})

module.exports = router
