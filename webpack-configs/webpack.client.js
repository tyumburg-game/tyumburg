// @ts-check
const path = require("path");
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
  entry: entry.client,
  output: output.client,
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [
      path.resolve(__dirname, "../node_modules"),
      path.resolve(__dirname, "../src/client"),
    ],
  },
  module: {
    rules: [typeScriptRule.client, cssRule],
  },
  plugins: plugins.client,
};
