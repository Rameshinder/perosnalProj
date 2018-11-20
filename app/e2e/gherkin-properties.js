var PropertiesReader = require('properties-reader')
var properties = PropertiesReader('./app/e2e/config/default.properties')
var fs = require('fs')

const contentFolder = './app/e2e/content/'
const buildFolder = './app/e2e/build/'

function generateFeatures (dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return console.log(err)
    }
    fs.mkdirSync(dir.replace(contentFolder, buildFolder))
    files.forEach(file => {
      if (file.endsWith('.feature')) {
        var feature = fs.readFileSync(dir + file, 'utf-8')
        for (var key in properties._properties) {
          var re = new RegExp(key, 'g')

          feature = feature.replace(re, properties._properties[key])
        }
        var processedFeatureFolder = dir.replace(contentFolder, buildFolder)
        fs.writeFile(processedFeatureFolder + file, feature, function (err) {
          if (err) {
            return console.log(err)
          }
        })
      } else {
        generateFeatures(dir + file + '/')
      }
    })
  })
}

let rmDir = function (dirPath) {
  try {
    var files = fs.readdirSync(dirPath)
  } catch (e) {
    return
  }
  if (files.length > 0) {
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i]
      if (fs.statSync(filePath).isFile()) {
        fs.unlinkSync(filePath)
      } else {
        rmDir(filePath)
      }
    }
  }
  fs.rmdirSync(dirPath)
}

rmDir(buildFolder)
generateFeatures(contentFolder)
