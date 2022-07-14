// @ts-check
const path = require("path");

/**
 * @typedef {import('webpack').RuleSetRule} RuleSetRule
 * @typedef {import('../types/index').ConfigPair<RuleSetRule>} TSConfigPair
 */

/**
 * @type {TSConfigPair}
 */
const typeScriptRule = {
  client: {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      "babel-loader",
      {
        loader: "ts-loader",
      },
    ],
  },
  server: {
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
};

module.exports = { typeScriptRule };
