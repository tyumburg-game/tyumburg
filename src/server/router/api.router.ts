import { Router } from "express";
import { topicsRouter } from "./topics.router";
import { usersRouter } from "./users.router";

export const apiRouter = (): Router => {
  const router = Router();

  router.use("/topics", topicsRouter());
  router.use("/users", usersRouter());

  return router;
};
