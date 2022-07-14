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

  return user !== null ? user.get() : null;
}

async function createNewUser(newUser: NewUser): Promise<User> {
  // @ts-ignore
  return UserModel.create(newUser, { returning: true });
}

const usersController = {
  getUserById,
  createNewUser,
};

export { usersController };
