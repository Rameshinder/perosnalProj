const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.js')
const path = require('path')
var basePath = process.cwd() + '/'
const buildPath = path.resolve(basePath, 'build')

module.exports = merge(baseConfig, {
  output: {
    path: buildPath,
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.DefinePlugin(
      {
        PEP_URL: JSON.stringify('http://localhost:4580'),
        __ENV__: JSON.stringify('DEV')
      }
    )
  ]
})
