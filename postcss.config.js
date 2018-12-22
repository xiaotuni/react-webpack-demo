module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-pxtorem')({
      rootValue: 37.4,
      replace: true,
      minPixelValue: 3,
      propList: [
        '*'
      ],
    })
  ]
};
