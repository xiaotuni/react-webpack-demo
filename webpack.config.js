const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清空打包目录
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 代码丑化
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// 抽取css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const CommCfg = require('./wepback.common.config.js');

const proCfg = {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader', options: {
                sourceMap: true, minimize: true,
                modules: true,
                localIdentName: '[local]_[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  path: 'postcss.config.js'
                }
              }
            },
            {
              loader: 'sass-loader', options: { sourceMap: true }
            }]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/www']),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
    new ExtractTextPlugin({ filename: '[name].[contenthash:5].css', allChunks: true }),
  ],
}

module.exports = merge(CommCfg, proCfg);


// module.exports = {
//   devtool: 'cheap-module-source-map',
//   entry: {
//     app: [
//       path.join(__dirname, 'src/index.js')
//     ],
//     vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
//   },
//   output: {
//     path: path.join(__dirname, './dist/www'),
//     filename: '[name].[chunkhash].js',
//     chunkFilename: '[name].[chunkhash].js',
//     publicPath: '/'
//   },
//   module: {
//     rules: [
//       { test: /\.js$/, use: ['babel-loader?cacheDirectory=true'], include: path.join(__dirname, 'src') },
//       { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
//       { test: /\.(png|jpg|gif)$/, use: [{ loader: 'url-loader', options: { limit: 8192 } }] },
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
//     new CleanWebpackPlugin(['dist/www']),
//     new ExtractTextPlugin({ filename: '[name].[contenthash:5].css', allChunks: true }),
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: path.join(__dirname, 'src/index.html')
//     }),
//     new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', }),
//     new webpack.optimize.CommonsChunkPlugin({ name: 'runtime' }),
//     new UglifyJSPlugin(),
//     new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
//     new webpack.HashedModuleIdsPlugin(),
//   ],
// }