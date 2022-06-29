import { Router } from "express";
import { topicsController } from "../controllers";
import { HttpCode } from "../constants";

export const topicsRouter = (): Router => {
  const router = Router();

  router.get("/id/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);

    try {
      const topic = await topicsController.getTopicById(id);

      if (topic) {
        res.status(HttpCode.OK).json(topic);
      } else {
        res.status(HttpCode.NOT_FOUND).send();
      }
    } catch (e) {
      res.status(HttpCode.NOT_FOUND).send();
    }
  });

  router.post("/", async (req, res) => {
    try {
      const newTopic = req.body;
      const topic = await topicsController.createNewTopic(newTopic);

      if (topic) {
        res.status(HttpCode.CREATED).json(topic);
      } else {
        res.status(HttpCode.NOT_FOUND).send();
      }
    } catch (e) {
      res.status(HttpCode.NOT_FOUND).send();
    }
  });

  return router;
};
