exports.config = {
  capabilites: {
    browserName: 'chrome'
  },
  framework: 'mocha',
  mochaOpts: {
    enableTimeouts: false
  },
  specs: [
    'test/protractor/**/*.spec.js'
  ]
}
