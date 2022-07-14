// @ts-check
const path = require("path");

/**
 * @typedef {import('webpack').Configuration['output']} Output
 * @typedef {import('./types/index').ConfigPair<Output>} OutputConfigPair
 */

/**
 * @type {OutputConfigPair}
 */
const output = {
  client: {
    path: path.resolve(__dirname, "../dist"),
    filename: "client.bundle.js",
    publicPath: "/",
    clean: false,
  },
  server: {
    path: path.resolve(__dirname, "../dist"),
    filename: "ssr.bundle.js",
    publicPath: "/",
    libraryTarget: "commonjs2",
    clean: false,
  },
};

module.exports = { output };
