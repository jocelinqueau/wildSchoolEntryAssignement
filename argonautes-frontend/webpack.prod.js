const path = require("path");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const common = require("./webpack.config");

const cleanOptions = {
  verbose: true,
  dry: true,
};

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.[contentHash].js",
  },
  plugins: [
    new CleanWebpackPlugin(cleanOptions),
    new CopyPlugin([{ from: "./public/_redirects" }]),
  ],
});
