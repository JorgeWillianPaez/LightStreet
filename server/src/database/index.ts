import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DB_URL,
  entities: ["./src/entities/**/*.ts"],
  migrations: ["./src/database/migrations/**/*.ts"],
});

export default AppDataSource;
