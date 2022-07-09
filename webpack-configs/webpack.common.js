const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const DotenvPlugin = require("dotenv-webpack");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  entry: [
    "@gatsbyjs/webpack-hot-middleware/client?path=/__webpack_hmr",
    "./src/client/index.tsx",
  ],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "client.bundle.js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [
      path.resolve(__dirname, "../node_modules"),
      path.resolve(__dirname, "../src/client"),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve("./src/client/tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "www/index.html",
    }),
    new HotModuleReplacementPlugin(),
    new ReactRefreshPlugin({
      overlay: {
        sockIntegration: "whm",
      },
    }),
    new MiniCssExtractPlugin(),
    new DotenvPlugin(),
  ],
};
