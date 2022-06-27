import { DataTypes } from "sequelize";
import { sequelize } from "../static-connection";
import { IUserModel, UserDBModel } from "./user.model.types";

const USER_MODEL_NAME = "User";
const UserModel: IUserModel = sequelize.define<UserDBModel>(USER_MODEL_NAME, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  first_name: {
    type: DataTypes.STRING,
  },
  second_name: {
    type: DataTypes.STRING,
  },
  login: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  display_name: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
});

export { USER_MODEL_NAME, UserModel, IUserModel };
