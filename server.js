const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.SSR_PORT_INTERNAL || 3000;

app.use(express.static(path.join(__dirname, "/dist/")));

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
