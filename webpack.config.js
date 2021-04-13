const path = require('path');

module.exports = {
  mode: 'development',
  entry: './source/js/main.js',
  output: {
    filename: 'main.bundle.js',
    path: path.join(__dirname, 'build/js/'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.(png|svg|jpe?g|gif|woff2?|ttf|eot)$/,
        use: [ 'file-loader' ] },
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    watchContentBase: true,
  }
};
