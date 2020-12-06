const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },

  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
  },
});
