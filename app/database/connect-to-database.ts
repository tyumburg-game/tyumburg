import promiseRetry from "promise-retry";
import { Sequelize } from "sequelize";
import { timeout } from "../utils";
import { getSequelizeOptions } from "./connection-options";

const INITIAL_DB_CONNECTION_DELAY = 1000;

const getRetryOptions = () => ({
  retries: process.env.APP_DB_CONNECTION_RETRIES || 5,
  minTimeout: process.env.APP_DB_CONNECTION_ATTEMPT_DELAY || 1000,
  maxTimeout: process.env.APP_DB_CONNECTION_ATTEMPT_DELAY || 1000,
});

async function connectToDatabase(): Promise<Sequelize> {
  await timeout(INITIAL_DB_CONNECTION_DELAY);
  const sequelize = new Sequelize(getSequelizeOptions());

  return promiseRetry((retry, attempt) => {
    console.log("Connection to database: attempt #", attempt);

    return sequelize
      .authenticate()
      .then(() => sequelize)
      .catch((e) => {
        console.error("Unable to connect to the database:", e);
        retry();
      });
  }, getRetryOptions());
}

export { connectToDatabase };
