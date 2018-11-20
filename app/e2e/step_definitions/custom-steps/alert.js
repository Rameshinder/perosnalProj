import checkContainsText from '../support/check/checkContainsText'

let alertSelector = '[data-test-id="warning-alert"]'
let infoSelector = '[data-test-id="info-alert"]'

var {defineSupportCode} = require('cucumber')

defineSupportCode(function ({Given, When, Then}) {
  Given(
    /^The Alert Should be "([^"]*)"$/, function (alertvalue) {
      browser.waitForExist(alertSelector)
      return checkContainsText('element', alertSelector, false, alertvalue)
    }
  )

  Given(
    /^The Info Alert Should be "([^"]*)"$/, function (alertvalue) {
      browser.waitForExist(infoSelector)
      return checkContainsText('element', infoSelector, false, alertvalue)
    }
  )
})
