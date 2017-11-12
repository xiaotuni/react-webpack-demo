const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const APP_PATH = path.join(__dirname, '..');
const AppCfg = require('../src/config');

const Config = {
  entry: {
    app: [path.join(APP_PATH, 'src/index.js')],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  output: {
    path: path.join(APP_PATH, AppCfg.app.BuildPath),// './dist/react'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: AppCfg.app.BaseName // '/react/'         // 这里必须和router里面写的那个basename要一样。要不能会出问题。
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader?cacheDirectory=true',
          {
            loader: 'eslint-loader', options: {}
          }
        ],
        include: path.join(APP_PATH, 'src')
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader', options: { limit: 8192 }
          }
        ]
      },
    ]
  },
  resolve: {
    alias: {
      pages: path.join(APP_PATH, 'src/pages'),
      component: path.join(APP_PATH, 'src/component'),
      router: path.join(APP_PATH, 'src/router'),
      actions: path.join(APP_PATH, 'src/redux/actions'),
      reducers: path.join(APP_PATH, 'src/redux/reducers'),
      containers: path.join(APP_PATH, 'src/containers'),
      components: path.join(APP_PATH, 'src/components'),
      common: path.join(APP_PATH, 'src/common'),
      styles: path.join(APP_PATH, 'src/styles'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(APP_PATH, 'src/index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'runtime' }),  // runtime以及vendor的顺序关系很重要要。
  ],
};

module.exports = Config;
