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
  context: path.resolve(__dirname, '..'),
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
    new CleanWebpackPlugin(['dist/reactdemo']),
    new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),
    // new UglifyJSPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    // new ExtractTextPlugin({ filename: '[name].[contenthash:5].css', allChunks: true }),
  ],
};

module.exports = merge(CommCfg, proCfg);
