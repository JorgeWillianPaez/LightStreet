import { DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

const config: DataSourceOptions = {
  type: "postgres",
  url: process.env.DB_URL,
  entities: ["./src/entities/**/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  synchronize: true,
  logging: true,
};

export default config;
