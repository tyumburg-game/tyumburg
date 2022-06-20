import promiseRetry from "promise-retry";
import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { timeout } from "./timeout";

const INITIAL_DB_CONNECTION_DELAY = 1000;

const getSequelizeOptions: () => SequelizeOptions = () => {
  const isRunsInsideContainer = !!process.env.APP_RUNS_INSIDE_CONTAINER;

  return {
    host: isRunsInsideContainer ? "postgres" : "0.0.0.0",
    port: isRunsInsideContainer
      ? 5432
      : parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    dialect: "postgres",
  };
};

const getRetryOptions = () => ({
  retries: process.env.APP_DB_CONNECTION_RETRIES || 5,
  minTimeout: process.env.APP_DB_CONNECTION_ATTEMPT_DELAY || 1000,
  maxTimeout: process.env.APP_DB_CONNECTION_ATTEMPT_DELAY || 1000,
});

export async function connectToDatabase() {
  await timeout(INITIAL_DB_CONNECTION_DELAY);
  const sequelize = new Sequelize(getSequelizeOptions());

  return promiseRetry((retry, attempt) => {
    console.log("Connection to database: attempt #", attempt);

    return sequelize
      .authenticate()
      .then(() => sequelize.sync())
      .catch((e) => {
        console.error("Unable to connect to the database:", e);
        retry();
      });
  }, getRetryOptions());
}
