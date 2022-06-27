import { isNull } from "lodash";
import { models } from "../database";
import { User } from "../../shared/types/user";
import { Nullable } from "../../src/types/util";

const { UserModel } = models;

async function getUserById(id: number): Promise<Nullable<User>> {
  const user = await UserModel.findOne({ where: { id } });

  return !isNull(user) ? user.get() : null;
}

export { getUserById };
