module.exports = {
  presets: [
    [
      "@babel/preset-typescript",
      {
        targets: "node 16.0",
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-modules-commonjs",
      {
        importInterop: "node",
        strict: true,
      },
    ],
  ],
};
