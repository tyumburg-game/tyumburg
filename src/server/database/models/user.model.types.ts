import {
  InferAttributes,
  InferCreationAttributes,
  Model,
  ModelCtor,
} from "sequelize";
import { User } from "../../types/user";

interface UserDBModel
  extends Model<
      InferAttributes<UserDBModel>,
      InferCreationAttributes<UserDBModel>
    >,
    User {}

type IUserModel = ModelCtor<UserDBModel>;

export { UserDBModel, IUserModel };
