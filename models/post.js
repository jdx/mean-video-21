var db = require('../db')

module.exports = db.model('Post', {
  status: { type: String, required: true },
  date:   { type: Date, required: true, default: Date.now }
})
