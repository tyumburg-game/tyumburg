import { Options } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const getSequelizeOptions: () => Options = () => {
  const isRunsInsideContainer = !!process.env.APP_RUNS_INSIDE_CONTAINER;
  const PORT = process.env.POSTGRES_PORT || "5432";

  return {
    host: isRunsInsideContainer ? "postgres" : "0.0.0.0",
    port: isRunsInsideContainer ? 5432 : parseInt(PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    dialect: "postgres",
  };
};

export { getSequelizeOptions };
