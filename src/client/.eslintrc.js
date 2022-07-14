module.exports = {
  extends: "../../.eslintrc.js",
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: __dirname,
      },
    },
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
