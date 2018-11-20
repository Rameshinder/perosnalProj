var q = require('q')
var fs = require('fs')

var AUDIT_FILE = require.resolve('accessibility-developer-tools/dist/js/axs_testing.js')

var a11yUtils = {

  /**
   * Audits page source against the Chrome Accessibility Developer Tools.
   *
   * @param {boolean} Should warnings be treated as failures?
   * @return {q.Promise} A promise which resolves to a boolean when the audit is finished. The boolean indicates whether the adit has passed or failed.
   */
  auditPage: function auditPage (treatWarningAsFailure) {
    var data = fs.readFileSync(AUDIT_FILE, 'utf-8')
    data = data + ' var output = axs.Audit.run();return output;'
    // console.log(data)
    var elementPromises = []
    var elementStringLength = 200

    function trimText (text) {
      if (text.length > elementStringLength) {
        return text.substring(0, elementStringLength / 2) + ' ... ' +
          text.substring(text.length - elementStringLength / 2)
      } else {
        return text
      }
    }

    var results = browser.execute(data)
    var audit = results.value.map(function (result) {
      var DOMElements = result.elements
      if (DOMElements !== undefined) {
        DOMElements.forEach(function (elem) {
          // get elements from WebDriver, add to promises array
          elementPromises.push(
            {
              code: result.rule.code,
              list: trimText(browser.elementIdAttribute(elem.ELEMENT, 'outerHTML').value)
            },
            function (reason) {
              return {
                code: result.rule.code,
                list: reason
              }
            }
          )
        })
        result.elementCount = DOMElements.length
      }
      return result
    })

    var isPassed = true
    console.log('\x1b[33mAccessibility Audit:')

    // Wait for element names to be fetched
    return q.all(elementPromises).then(function (elementFailures) {
      return audit.forEach(function (result, index) {
        if (result.result === 'FAIL') {
          var label = result.elementCount === 1 ? ' element ' : ' elements '
          if (result.rule.severity !== 'Warning' ||
            treatWarningAsFailure) {
            result.warning = false
          } else {
            result.warning = true
            result.rule.heading = '(WARNING) ' +
              result.rule.heading + ' (' + result.elementCount +
              label + 'failed)'
          }
          result.output = '\n\t\t' + result.elementCount + label + 'failed:'

          // match elements returned via promises
          // by their failure codes
          elementFailures.forEach(function (element, index) {
            if (element.code === result.rule.code) {
              result.output += '\n\t\t' + elementFailures[index].list
            }
          })
          result.output += '\n\n\t\t' + result.rule.url
          if (result.warning) {
            console.log('\x1b[33mWarning: ' + result.rule.heading)
          } else {
            console.log('\x1b[31mFail: ' + result.rule.heading)
            isPassed = false
          }
          console.log(result.output)
        } else {
          console.log('\x1b[32mPass: ' + result.rule.heading)
        }
      })
    }).then(function () {
      console.log('\x1b[33mAccessibility Audit Complete\x1b[39m')
      return isPassed
    })
  }
}

// Export
module.exports = a11yUtils
