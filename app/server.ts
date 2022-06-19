import path from "path";
import express from "express";
import { connectToDatabase } from "./utils";
import { appRouter } from "./router";

const app = express();

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
