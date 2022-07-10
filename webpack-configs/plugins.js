// @ts-check
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

/**
 * @typedef {import('webpack').Configuration['plugins']} Plugins
 * @typedef {import('./types/index').ConfigPair<Plugins>} PluginsConfigPair
 */

const isProd = process.env.NODE_ENV === "production";

/**
 * @type {PluginsConfigPair}
 */
const plugins = {
  client: [
    new HtmlWebpackPlugin({
      template: "www/index.html",
    }),
    !isProd && new HotModuleReplacementPlugin(),
    !isProd &&
      new ReactRefreshPlugin({
        overlay: {
          sockIntegration: "whm",
        },
      }),
    new MiniCssExtractPlugin(),
    new DotenvWebpackPlugin(),
  ].filter(Boolean),
  server: [new MiniCssExtractPlugin(), new DotenvWebpackPlugin()],
};

module.exports = { plugins };
