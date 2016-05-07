var path = require('path');
module.exports = {
  entry: {
    "./dist/index": "./src/main.es6"
  },
  module: {
    debug: true,
    devtool: "source-map",
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
  }
};
