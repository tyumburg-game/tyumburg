import { Router } from "express";
import { topicsRouter } from "./topics.router";

export const apiRouter = (): Router => {
  const router = Router();

  router.use("/topics", topicsRouter());

  return router;
};
