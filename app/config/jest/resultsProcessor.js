module.exports = (results) => {
  process.env.TEST_REPORT_PATH = process.cwd() + '/reports/unit'
  require('./../../../node_modules/jest-sonar-reporter/index').apply(this, [results])
  require('./../../../node_modules/jest-junit/index').apply(this, [results])
  // add any other processor you need
  return results
}
