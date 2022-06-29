import { isNull } from "lodash";
import { NewUser, User } from "../types/user";
import { UserModel } from "../database";

async function getUserById(id: number): Promise<Nullable<User>> {
  const user = await UserModel.findOne({
    where: { id },
    attributes: [
      "id",
      "avatar",
      "first_name",
      "second_name",
      "login",
      "email",
      "display_name",
    ],
  });

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
