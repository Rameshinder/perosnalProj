let util = require('util')
let events = require('events')
let fs = require('fs')
let mkdirp = require('mkdirp')
let path = require('path')

class RerunReporter extends events.EventEmitter {
  constructor (baseReporter, config, options = {}) {
    super()

    let featuresList = []

    const rerunFolder = './reports/e2e'
    const rerunFile = path.join(rerunFolder, 'rerun.txt')
    mkdirp.sync(rerunFolder)

    var exists = false
    try {
      fs.accessSync(rerunFile)
      exists = true
    } catch (ex) {
      exists = false
    }

    if (exists) {
      try {
        fs.unlinkSync(rerunFile)
      } catch (err) {
        console.error('Error deleting ' + rerunFile + ': ' + err)
      }
    }

    this.on('test:fail', function (test) {
      let filePath = '.' + test.file // test.file begins with '/'

      if (featuresList.indexOf(filePath) === -1) {
        featuresList.push(filePath)
      }
    })

    this.on('end', function () {
      if (featuresList.length > 0) {
        fs.appendFileSync(rerunFile, featuresList.toString())
      }
    })
  }
}

RerunReporter.reporterName = 'RerunReporter'

util.inherits(RerunReporter, events.EventEmitter)

exports = module.exports = RerunReporter
