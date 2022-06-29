import { isNull } from "lodash";
import { models } from "../database";
import { NewUser, User } from "../types/user";

const { UserModel } = models;

async function getUserById(id: number): Promise<Nullable<User>> {
  const user = await UserModel.findOne({ where: { id } });

  return !isNull(user) ? user.get() : null;
}

async function createNewUser(newUser: NewUser): Promise<User> {
  return UserModel.create(newUser, { returning: true });
}

const usersController = {
  getUserById,
  createNewUser,
};

export { usersController };