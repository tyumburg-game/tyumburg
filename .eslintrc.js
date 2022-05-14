module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  ignorePatterns: [".eslintrc.js", "*.css", "*.png"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/ignore": ["node_modules", "\\.(css|png|jpg|svg|json)$"],
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "tsconfig.json",
      },
    },
  },
  rules: {
    "no-console": "off",
    "no-plusplus": "off",
    "consistent-return": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react/button-has-type": "off",
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "import/named": "error",
    "import/namespace": "error",
    "import/default": "error",
    "import/export": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "object",
          "type",
          "unknown",
        ],
      },
    ],
  },
};
