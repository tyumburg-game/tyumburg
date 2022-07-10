// @ts-check

/**
 * @typedef {import('webpack').Configuration['entry']} Entry
 * @typedef {import('./types/index').ConfigPair<Entry>} EntryConfigPair
 */

const production = process.env.NODE_ENV === "production";

/**
 * @type {EntryConfigPair}
 */
const entry = {
  client: [
    !production &&
      "@gatsbyjs/webpack-hot-middleware/client?path=/__webpack_hmr",
    "./src/client/index.tsx",
  ].filter((plugin) => Boolean(plugin)),
  server: ["./src/client/components/App/App.tsx"],
};

module.exports = { entry };
