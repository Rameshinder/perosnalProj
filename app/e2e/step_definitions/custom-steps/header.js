import isVisible from '../support/check/isVisible'

let logoSelector = '[data-test-id="header-logo"]'

var {defineSupportCode} = require('cucumber')

defineSupportCode(function ({Given, When, Then}) {
  Given(
    /^The header contains the ANZ logo$/, function () {
      return isVisible(logoSelector)
    }
  )
})
