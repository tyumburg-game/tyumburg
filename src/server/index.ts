import path from "path";
import express from "express";
import { middleware } from "./render/hmr";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "../../dist/bundle")));

app.use(middleware);

app.listen(PORT, () => {
  console.log(`App on http://localhost:${PORT}`);
});
