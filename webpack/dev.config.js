const path = require('path');
const merge = require('webpack-merge');
const CommCfg = require('./common.config.js');
const APP_PATH = path.join(__dirname, '..');
const AppCfg = require('../src/config');

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(APP_PATH, 'src/index.js')
    ]
  },
  output: {
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true, modules: true, localIdentName: '[local]_[hash:base64:5]' } },
          { loader: 'postcss-loader', options: { sourceMap: true, config: { path: 'postcss.config.js' } } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true, modules: true, localIdentName: '[local]_[hash:base64:5]' } },
          { loader: 'postcss-loader', options: { sourceMap: true, config: { path: 'postcss.config.js' } } },
          { loader: 'less-loader', options: { sourceMap: true, paths: [path.resolve(__dirname, 'node_modules')], javascriptEnabled: true } }
        ]
      }
    ]
  },
  devServer: {
    port: 11111,
    // contentBase: path.join(__dirname, '..', './react'),
    historyApiFallback: { index: AppCfg.app.BaseName }, // 解决进行非默认页面，刷新报404问题。
    host: '0.0.0.0'
  },
};

const mergeCfg = merge({
  customizeArray(a, b, key) {
    /**
     * entry.app不合并，全替换
     */
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(CommCfg, devConfig);

module.exports = mergeCfg;
