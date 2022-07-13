// @ts-check

/**
 * @typedef {import('webpack').Configuration['entry']} Entry
 * @typedef {import('./types/index').ConfigPair<Entry>} EntryConfigPair
 */

const isProd = process.env.NODE_ENV === "production";

/**
 * @type {EntryConfigPair}
 */
const entry = {
  client: [
    !isProd && "@gatsbyjs/webpack-hot-middleware/client?path=/__webpack_hmr",
    "./src/client/index.tsx",
  ].filter(Boolean),
  server: ["./src/client/components/App/App.tsx"],
};

module.exports = { entry };
