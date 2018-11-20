import openWebsite from '../support/action/openWebsite'
import pause from '../support/action/pause'

var {defineSupportCode} = require('cucumber')

defineSupportCode(function ({Given, When, Then}) {
  Given('Open the app', function () {
    openWebsite('url', browser.options.baseUrl)
    return pause(1000)
  }
  )
})
