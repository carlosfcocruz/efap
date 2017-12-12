'use strict';

const path = require('path');
// import path from 'path';

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [ 'env' ],
          compact: false
        }
      }
    ]
  },
  stats: {
    colors: true
  }
};
