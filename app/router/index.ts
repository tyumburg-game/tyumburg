import path from "path";
import { Router } from "express";
import { apiRouter } from "./api.router";

export const appRouter = (): Router => {
  const router = Router();

  router.use("/api", apiRouter());
  router.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
  });

  return router;
};
