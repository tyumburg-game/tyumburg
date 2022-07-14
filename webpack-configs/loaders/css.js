// @ts-check
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @typedef {import('webpack').RuleSetRule} RuleSetRule
 */

/**
 * @type {RuleSetRule}
 */
const cssRule = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
};

module.exports = { cssRule };
