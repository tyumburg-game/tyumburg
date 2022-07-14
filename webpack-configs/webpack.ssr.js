// @ts-check
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { typeScriptRule } = require("./loaders/type-script");
const { cssRule } = require("./loaders/css");
const { output } = require("./output");
const { entry } = require("./entry");
const { plugins } = require("./plugins");

const isProd = process.env.NODE_ENV === "production";

/**
 @type {import('webpack').Configuration} Configuration
 */
module.exports = {
  mode: isProd ? "production" : "development",
  entry: entry.server,
  output: output.server,
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [
      path.resolve(__dirname, "../node_modules"),
      path.resolve(__dirname, "../src/client"),
    ],
  },
  module: {
    rules: [typeScriptRule.server, cssRule],
  },
  plugins: plugins.server,
  externalsPresets: {
    node: true,
  },
  externals: [nodeExternals()],
};
