import promiseRetry from "promise-retry";
import { Sequelize } from "sequelize";
import { timeout } from "../utils";
import { getSequelizeOptions } from "./connection-options";
import {
  USER_MODEL_NAME,
  UserModelParams,
  TOPIC_MODEL_NAME,
  TopicModelParams,
  IUserModel,
  ITopicModel,
} from "./models";

const INITIAL_DB_CONNECTION_DELAY = 1000;

const getRetryOptions = () => ({
  retries: parseInt(process.env.APP_DB_CONNECTION_RETRIES || "5", 10),
  minTimeout: parseInt(
    process.env.APP_DB_CONNECTION_ATTEMPT_DELAY || "1000",
    10
  ),
  maxTimeout: parseInt(
    process.env.APP_DB_CONNECTION_ATTEMPT_DELAY || "1000",
    10
  ),
});

const sequelize = new Sequelize(getSequelizeOptions());
const UserModel: IUserModel = sequelize.define(
  USER_MODEL_NAME,
  UserModelParams,
  {}
);

const TopicModel: ITopicModel = sequelize.define(
  TOPIC_MODEL_NAME,
  TopicModelParams,
  {}
);

UserModel.hasMany(TopicModel);
TopicModel.belongsTo(UserModel, { foreignKey: "user_id" });

async function connectToDatabase(): Promise<Sequelize> {
  await timeout(INITIAL_DB_CONNECTION_DELAY);

  return promiseRetry<Sequelize>(
    getRetryOptions(),
    (retry: (error?: any) => never, attempt: number) => {
      console.log("Connection to database: attempt #", attempt);

      return sequelize
        .authenticate()
        .then(() => sequelize)
        .catch((e) => {
          console.error("Unable to connect to the database:", e);
          retry();
        });
    }
  );
}

export { connectToDatabase, UserModel, TopicModel };
