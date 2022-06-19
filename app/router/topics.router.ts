import { Router } from "express";
import { timeout } from "../utils";

export const topicsRouter = (): Router => {
  const router = Router();

  router.get("/", async (req, res) => {
    await timeout(300);
    res.json({ page: "topics" });
  });

  return router;
};
