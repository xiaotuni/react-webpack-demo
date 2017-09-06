const path = require('path');
module.exports = {
  entry:  [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      }

    ]
  },
  devServer: {
    port: 11111,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0'
  }
}