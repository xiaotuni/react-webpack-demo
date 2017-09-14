const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const Config = {
  entry: {
    app: [path.join(__dirname, 'src/index.js')],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  output: {
    path: path.join(__dirname, './dist/www'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          "babel-loader?cacheDirectory=true",
          {
            loader: "eslint-loader", options: {
              // // several examples !
              // // default value
              // formatter: require("eslint/lib/formatters/stylish"),
              // // community formatter
              // // formatter: require("eslint-friendly-formatter"),
              // // custom formatter
              // formatter: function (results) {
              //   // `results` format is available here
              //   // http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles()
              //   // you should return a string
              //   // DO NOT USE console.*() directly !
              //   return "OUTPUT";
              // }
            }
          }
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192 }
          }
        ]
      },
    ]
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, 'src/pages'),
      component: path.join(__dirname, 'src/component'),
      router: path.join(__dirname, 'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers'),
      containers: path.join(__dirname, 'src/containers'),
      components: path.join(__dirname, 'src/components'),
      common: path.join(__dirname, 'src/common'),
      styles: path.join(__dirname, 'src/styles'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'runtime' }),
  ],
};

module.exports = Config;