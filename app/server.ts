import path from "path";
import express from "express";
import dotenv from "dotenv";
import * as bodyParser from "body-parser";
import { appRouter } from "./router";
import { connectToDatabase, fillDatabase } from "./database";

dotenv.config();
const app = express();

const PORT = process.env.SSR_PORT_INTERNAL || 3000;

app.use(express.static(path.join(__dirname, "/dist/")));
app.use(bodyParser.json());
app.use(appRouter());

export async function startServer() {
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
