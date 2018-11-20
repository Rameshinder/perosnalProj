let env = require('konfig')({
  path: './app/config'
})

let config = require('./wdio.conf.js').config
let RerunReporter = require('../../e2e/rerunReporter')

let tags = ['@done', '@smoke', '~@pending', '~@wip']

config.capabilities = [{
  browserName: 'chrome'
  // browserName: 'firefox'
  // browserName: 'internet explorer'
  // applicationName: 'debug'
}]

config.baseUrl = env.properties.baseUrl
config.host = env.properties.seleniumServerHost
config.port = env.properties.seleniumServerPort
config.path = '/wd/hub'
config.reporters = ['spec', RerunReporter, 'junit']
config.reporters = ['spec', 'junit']
config.logLevel = 'error'
config.cucumberOpts.tags = tags
config.services = []

console.log('Using selenium server: ' + config.host + ':' + config.port)
exports.config = config
