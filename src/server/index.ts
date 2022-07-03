import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { appRouter } from "./router";
import { connectToDatabase, fillDatabase } from "./database";
import { middleware } from "./render/hmr";

dotenv.config();
const app = express();
const PORT = process.env.SSR_PORT_INTERNAL || 3000;

app.use(bodyParser.json());
app.use(appRouter());
app.use(middleware);

startServer();

async function startServer() {
  try {
    await connectToDatabase();
    await fillDatabase();
    console.log("Database connection was successfully established");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  } catch (e) {
    console.error("Unable to start server", "\n", e);
    process.exit(1);
  }
}
