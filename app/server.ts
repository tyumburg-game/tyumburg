import path from "path";
import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./utils";
import { appRouter } from "./router";

dotenv.config();
const app = express();

const PORT = process.env.SSR_PORT_INTERNAL || 3000;

app.use(express.static(path.join(__dirname, "/dist/")));

app.use(appRouter());

export async function startServer() {
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
}
