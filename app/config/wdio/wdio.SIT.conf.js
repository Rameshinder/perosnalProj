let env = require('konfig')({
  path: './app/config'
})

let config = require('./wdio.conf.js').config

config.capabilities = [{
  browserName: 'chrome'
}]

config.baseUrl = env.properties.baseUrl
config.host = env.properties.seleniumServerHost
config.port = env.properties.seleniumServerPort
config.path = '/wd/hub'
config.services = []

console.log('Using selenium server: ' + config.host + ':' + config.port)
exports.config = config
