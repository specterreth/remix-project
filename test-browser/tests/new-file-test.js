'use strict'
var init = require('../helpers/init')

module.exports = {
  before: function (browser, done) {
    init(browser, done)
  },
  'New file test': function (browser) {
    browser
      .waitForElementVisible('.newFile', 10000)
      .click('.newFile')
      .pause('10000')
      .assert.containsText('.active', 'Untitled')
      .end()
  }
}
