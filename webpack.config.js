var webpack = require('webpack');

/*
config for webpack. Will be used in
the Gulpfile for building our app.
Does not need gulp in order to do so,
but we use gulp to orchestrate
 */
module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file' },
      { test: /\.js$/, loaders: ['ng-annotate','babel?stage=1'], exclude: [/client\/lib/, /node_modules/, /\.spec\.js/] }
    ]
  },

  plugins: [
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          moment: 'moment',
          toastr: 'toastr'
      })
  ]
};
