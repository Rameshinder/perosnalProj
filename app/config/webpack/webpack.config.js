const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const buildPath = path.resolve(__dirname, 'build')
const API_PATH = {
  'onlineappssit1.dev.anz': 'http://dgoma01z.unix.anz:33770/credentialrecovery',
  'prod.anz': 'http://dgoma01z.unix.anz:33770/credentialrecovery',
  'localhost': 'http://localhost:8080'
}

module.exports = {
  entry: {
    main: './app/src/index.js'
  },
  output: {
    path: buildPath,
    publicPath: '',
    filename: '[name]_bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: ['/(node_modules)/', './src/app/modules/global/index.js'],
      enforce: 'pre'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      },
      exclude: ['/node_modules/', '/app/config', '/app/e2e/**.*', '/app/src/**/*.test.js', '/assets/']
    },
    {
      test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader'
    },
    {
      test: /\.(jpe?g|png|gif|svg|ico)$/,
      loader: 'file-loader?name=assets/[name].[ext]',
      exclude: '/node_modules/'
    }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../apache/.htaccess'),
        transform: (content, path) => {
          let rewriteCond = 'RewriteCond %{HTTP_HOST} ^%{CONTENT_HOST_NAME}% [NC] \n\t '
          let rewriteRule = 'RewriteRule ^api/(.*)$  %{API_PROXY_PATH}%/$1 [L,P] \n\t '
          let updatedRule
          for (let proxyKey of Object.keys(API_PATH)) {
            updatedRule = updatedRule ? updatedRule + rewriteCond + rewriteRule : rewriteCond + rewriteRule
            updatedRule = updatedRule.replace('%{CONTENT_HOST_NAME}%', proxyKey)
            updatedRule = updatedRule.replace('%{API_PROXY_PATH}%', API_PATH[proxyKey])
          }

          let updatedContent = content.toString().replace('%{RewriteRule_API_PATH}%', updatedRule)
          return Buffer.from(updatedContent)
        }
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: './node_modules/@anz/typekit',
        to: 'typekit'
      }
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
