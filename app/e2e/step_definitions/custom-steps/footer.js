let footerSelector = '[data-test-id="footer-details"]'

var {defineSupportCode} = require('cucumber')

defineSupportCode(function ({Given, When, Then}) {
  Given(
    /^The footer contains the text "([^"]*)?"$/, function (text) {
      return browser.getText(footerSelector).should.contain(text)
    }
  )
})
