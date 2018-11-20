const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.js')
const webpack = require('webpack')

const Jarvis = require('webpack-jarvis')
const path = require('path')
var basePath = process.cwd() + '/'
const buildPath = path.resolve(basePath, 'build')
const API_PATH = {
  'onlineappssit1.dev.anz': 'http://dgoma01z.unix.anz:33770/credentialrecovery',
  'prod.anz': 'http://dgoma01z.unix.anz:33770/credentialrecovery',
  'localhost': 'http://localhost:8080'
}

/* get available environment setting */

const environment = function () {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'prod.anz'
    case 'sit1':
      return 'onlineappssit1.dev.anz'
    case 'local':
      return 'localhost'
    default:
      return 'localhost'
  }
}

const API_PATH_LOCALHOST = API_PATH[environment()]

module.exports = merge(baseConfig, {
  plugins: [
    new Jarvis({
      port: 1337 /* Change port if running multiple instances. */
    }),
    new webpack.DefinePlugin(
      {
        PEP_URL: JSON.stringify('http://localhost:4580'),
        __ENV__: JSON.stringify('DEV')
      }
    )
  ],
  devServer: {
    proxy: {
      '/api': {
        target: API_PATH_LOCALHOST,
        pathRewrite: {'^/api': ''},
        secure: false
      },
      '/mb': {
        target: 'http://localhost:2525',
        pathRewrite: {'^/mb': ''},
        secure: false
      }
    },
    historyApiFallback: {
      index: '/index.html'
    },
    contentBase: buildPath,
    inline: true,
    disableHostCheck: true
  }
})
