var router = require('express').Router()
var bodyParser = require('body-parser')

router.use(bodyParser.json())

router.post('/posts', function (req, res) {
  res.json(req.body)
})

module.exports = router
