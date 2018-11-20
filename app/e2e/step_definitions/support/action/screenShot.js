/**
 * Take Screenshot
 * @param  {String}   filename  Name of the screenshot
 * @param  {Function} done      Function to execute when finished
 */
module.exports = (filename) => {
  browser.pause(1000)
  let fs = require('fs')
  let screenshot = browser.saveScreenshot() // returns base64 string buffer
  fs.writeFileSync('./screenShots/' + filename + '.png', screenshot)
}
