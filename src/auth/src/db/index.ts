import dotenv from "dotenv";
dotenv.config();

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const DB_HOST = process.env.DB_HOST ?? "localhost";
const AUTH_SERVICE_PORT =
  (process.env.AUTH_SERVICE_PORT as number | undefined) ?? 5432;
const DB_USER = process.env.DB_USER ?? "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD ?? "postgres";
const AUTH_DB_NAME = process.env.AUTH_DB_NAME ?? "postgres";

export const pool = new Pool({
  connectionString: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${AUTH_SERVICE_PORT}/${AUTH_DB_NAME}`,
});

export const db = drizzle(pool);
