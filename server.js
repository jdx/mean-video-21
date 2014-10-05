var express = require('express')
var morgan = require('morgan')

var app = express()

app.use(morgan('dev'))

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index.html.ejs')
})

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('server is listening on port %d', server.address().port)
})
