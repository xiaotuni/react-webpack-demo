const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CommCfg = require('./wepback.common.config.js');
console.log('----------------dev.config---------');
console.log(CommCfg);
console.log('----------------dev.config---------');

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ]
  },
  output: {
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ]
  },
  devServer: {
    port: 11111,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0'
  },
}
const m = merge({
  customizeArray(a, b, key) {
    /*entry.app不合并，全替换*/
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(CommCfg, devConfig);

console.log(m);
console.log('-------merge---------');
module.exports = m;


// module.exports = {
//   devtool: 'inline-source-map',
//   entry: {
//     app: [
//       'react-hot-loader/patch',
//       path.join(__dirname, 'src/index.js')
//     ],
//     vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
//   },
//   output: {
//     path: path.join(__dirname, './dist'),
//     // filename: 'bundle.js',
//     // chunkFilename: '[name].js'
//     filename: '[name].[hash].js',
//     chunkFilename: '[name].[chunkhash].js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: ['babel-loader?cacheDirectory=true'],
//         include: path.join(__dirname, 'src')
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.(png|jpg|gif)$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: { limit: 8192 }
//           }
//         ]
//       },
//     ]
//   },
//   resolve: {
//     alias: {
//       pages: path.join(__dirname, 'src/pages'),
//       component: path.join(__dirname, 'src/component'),
//       router: path.join(__dirname, 'src/router'),
//       actions: path.join(__dirname, 'src/redux/actions'),
//       reducers: path.join(__dirname, 'src/redux/reducers'),
//     }
//   },
//   devServer: {
//     port: 11111,
//     contentBase: path.join(__dirname, './dist'),
//     historyApiFallback: true,
//     host: '0.0.0.0'
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: path.join(__dirname, 'src/index.html')
//     }),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'vendor',
//     }),
//   ],
// }