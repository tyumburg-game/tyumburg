const express = require("express");
const path = require("path");
const app = express();
const { connectToDatabase } = require("./utils");

const PORT = process.env.SSR_PORT_INTERNAL || 3000;

app.use(express.static(path.join(__dirname, "/dist/")));

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

(async () => {
  try {
    await connectToDatabase();
    console.log("Database connection was successfully established");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  } catch (e) {
    console.error("Unable to establish database connection", "\n", e);
    process.exit(1);
  }
})();
