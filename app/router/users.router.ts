import { Router } from "express";
import { HttpCode } from "../constants/http-code";
import { usersController } from "../controllers";

const usersRouter = (): Router => {
  const router = Router();

  router.get("/id/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);

    try {
      const user = await usersController.getUserById(id);

      if (user) {
        res.status(HttpCode.OK).json(user);
      } else {
        res.status(HttpCode.NOT_FOUND).send();
      }
    } catch (e) {
      res.status(HttpCode.NOT_FOUND).send();
    }
  });

  router.post("/", async (req, res) => {
    try {
      const newUser = req.body;
      const user = await usersController.createNewUser(newUser);

      if (user) {
        res.status(HttpCode.CREATED).json(user);
      } else {
        res.status(HttpCode.NOT_FOUND).send();
      }
    } catch (e) {
      res.status(HttpCode.NOT_FOUND).send();
    }
  });

  return router;
};

export { usersRouter };
