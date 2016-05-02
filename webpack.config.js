var path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module:{
    loaders:[{
      test: /\.jsx?$/,//
      exclude:/(node_modules|bower_components)/,
      loader: 'babel',
      query:{
        presets:['react','es2015'],
        compact:false
      }
    }]
  }
}