import setInputField from '../support/action/setInputField.js'
import pause from '../support/action/pause'

var {defineSupportCode} = require('cucumber')

defineSupportCode(function ({Given, When, Then}) {
  Given(
    /^Set Input Value "([^"]*)" for id "([^"]*)"$/, function (inputValue, elementId, done) {
      return setInputField(inputValue, elementId, function () { pause(100, done) })
    }
  )
})
