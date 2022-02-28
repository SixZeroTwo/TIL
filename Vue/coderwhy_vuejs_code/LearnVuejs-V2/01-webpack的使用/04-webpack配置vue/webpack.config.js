const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // 涉及到url自动添加路径
    publicPath: "dist/",
  },
  module: {
    rules: [
      {
        // 转义. 匹配所有css文件
        test: /\.css$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到DOM中
        // 使用多个loader的时候，从右向左读取
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader", // 从 JS 中创建样式节点
          },
          {
            loader: "css-loader", // 转化 CSS 为 CommonJS
          },
          {
            loader: "less-loader", // 编译 Less 为 CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              // 当加载的图片小于limit时，会将图片编译成base64字符串形式
              // 大于的话会报错，Cannot find module 'file-loader'
              // npm install file-loader --save-dev
              // 没有显示？报错文件找不到 路径 b939991dba660315bb66570ce2e58b6b.jpg
              // base64不需要单独的文件进行存储
              // 文件需要打包 添加publicPath
              limit: 8000,
              // 命名规范
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        // 排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015"],
          },
        },
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    // 扩展名省略
    extensions: [".js", ".css", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  plugins: [new webpack.BannerPlugin("最终版权归aaa所有")],
};
