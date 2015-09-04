var path = require('path')
var webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: {
    app: ['webpack/hot/dev-server', './scripts/app.js']
  },
  output: {
    path: __dirname + '/assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel'},
      {test: /\.html$/, exclude: /(node_modules|bower_components)/, loader: 'ngtemplate!html'}
    ]
  },
  resolve: {
    root: ['node_modules', 'bower_components']
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
