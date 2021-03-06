const path = require("path");

module.exports = {
  mode: 'development',
  entry: {
      main: "./docs/js/main.js",
      calc: "./docs/js/calc.js"
  },
  output: {
      path: path.join(__dirname, "docs", "build"),
      filename: "[name].js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  }
};