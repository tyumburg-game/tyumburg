import {
  connectToDatabase,
  UserModel,
  TopicModel,
} from "./connect-to-database";
import { fillDatabase } from "./fill-database";
import { sequelize } from "./static-connection";

export { connectToDatabase, fillDatabase, sequelize, UserModel, TopicModel };
