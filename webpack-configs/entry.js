// @ts-check
const path = require("path");

/**
 * @typedef {import('webpack').Configuration['entry']} Entry
 * @typedef {import('./types/index').ConfigPair<Entry>} EntryConfigPair
 */

/**
 * @type {EntryConfigPair}
 */
const entry = {
  client: [
    "@gatsbyjs/webpack-hot-middleware/client?path=/__webpack_hmr",
    "./src/client/index.tsx",
  ],
  server: ["./src/client/components/App/App.tsx"],
};

module.exports = { entry };
