const WebpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = WebpackMerge(baseConfig, {
  devServer: {
    //为哪一个文件进行服务
    contentBase: "./dist",
    // 是否实时更新
    inline: true,
  },
});
