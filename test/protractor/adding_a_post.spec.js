var chai = require('chai')
chai.use(require('chai-as-promised'))
var expect = chai.expect

describe('adding a post', function () {
  it('adds a new post to the system', function () {
    browser.get('http://localhost:3000')

    element(by.css('.nav .posts')).click()

    var status = 'my new status update' + Math.random()
    element(by.css('input.status')).sendKeys(status)
    element(by.css('form input[type=submit]')).click()

    expect(element.all(by.css('ul#posts li')).first().getText()).to.eventually.contain(status)
  })
})
