import { defineSupportCode } from 'cucumber'

import a11yUtil from '../support/a11yAudit'

defineSupportCode(({ Given }) => {
  Given(/^Run an accessibility audit$/, function () {
    return a11yUtil.auditPage(true).then(function (isPassed) {
      return assert.isTrue(isPassed, 'Accessibility checks have failed - please see the console log to view errors found.')
    })
  })
})
