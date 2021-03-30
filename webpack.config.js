const path = require('path');

module.exports = {
  mode: 'development',
  entry: './source/js/main.js',
  output: {
    filename: 'main.bundle.js',
    path: path.join(__dirname, 'build/js'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    watchContentBase: true,
  }
};
