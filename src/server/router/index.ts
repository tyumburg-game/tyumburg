import { Router } from "express";
import { apiRouter } from "./api.router";

export const appRouter = (): Router => {
  const router = Router();

  router.use("/api", apiRouter());

  return router;
};
