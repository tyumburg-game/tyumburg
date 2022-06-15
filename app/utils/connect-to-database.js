const promiseRetry = require("promise-retry");
const { Client } = require("pg");
const { timeout } = require("./timeout");

const INITIAL_DB_CONNECTION_DELAY = 1000;

function getClient() {
  return new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: "postgres",
    port: 5432,
  });
}

const retryOptions = {
  retries: process.env.APP_DB_CONNECTION_RETRIES || 5,
  minTimeout: process.env.APP_DB_CONNECTION_ATTEMPT_DELAY || 1000,
  maxTimeout: process.env.APP_DB_CONNECTION_ATTEMPT_DELAY || 1000,
};

async function connectToDatabase() {
  await timeout(INITIAL_DB_CONNECTION_DELAY);

  return promiseRetry((retry, attempt) => {
    console.log("Connection to database: attempt #", attempt);
    const client = getClient();
    return client.connect().catch((e) => {
      console.error(e);
      client.end();
      retry();
    });
  }, retryOptions);
}

module.exports = {
  connectToDatabase,
};
