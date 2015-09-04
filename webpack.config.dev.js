var webpack = require('webpack')
var webpackDevServer = require('webpack-dev-server')
var webpackConfig = require('./webpack.config.js')

var bundleStart = null;
var compiler = webpack(webpackConfig);

compiler.plugin('compile', function() {
  console.log('Bundling...');
  bundleStart = Date.now();
});

compiler.plugin('done', function() {
  console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
});

var bundler = new webpackDevServer(compiler, {

  publicPath: '/',
  hot: true,
  quiet: false,
  noInfo: true,
  stats: {
    colors: true
  }
});

bundler.listen(3000, 'localhost', function () {
  console.log('Bundling project, please wait...');
});
