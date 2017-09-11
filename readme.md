https://github.com/brickspert/blog/issues/1

## 引入scss
---
webpack.dev.config
```code
const styles = require('./demo.scss');

render(){
  return(
    <div className={styles.className}>content</div>
  );
}
```
### 配置 url:https://github.com/webpack-contrib/css-loader
```

{
  test: /\.scss$/,
  use: [
    { loader: "style-loader" },
    {
      loader: "css-loader", options: {
        sourceMap: true,
        modules: true, minimize: true,
        localIdentName: '[local]_[hash:base64:5]'
      }
    },
    {loader: "sass-loader", options:{sourceMap:true }}
  ]
}
```