import { DataTypes } from "sequelize";

const USER_MODEL_NAME = "user";
const UserModelParams = {
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
};

export { USER_MODEL_NAME, UserModelParams };
