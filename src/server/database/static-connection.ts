import { Sequelize } from "sequelize";
import { getSequelizeOptions } from "./connection-options";

export const sequelize = new Sequelize(getSequelizeOptions());
