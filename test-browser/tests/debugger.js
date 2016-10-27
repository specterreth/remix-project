'use strict'
var init = require('../helpers/init')

module.exports = {
  before: function (browser, done) {
    init(browser, done)
  },
  'Debugger Render': function (browser) {
    browser
      .waitForElementPresent('#debugger', 10000)
      .waitForElementPresent('#debugger #slider', 10000)
      .end()
  }
}
