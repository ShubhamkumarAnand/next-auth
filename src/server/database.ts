import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";
import { DB } from "~/db/types";

const dialect = new PostgresDialect({
  pool: new Pool({
    database: process.env.DATABASE_NAME as string,
    password: process.env.DATABASE_PASSWORD as string,
    host: process.env.DATABASE_HOST as string,
    user: process.env.DATABASE_USER as string,
    port: Number(process.env.DATABASE_PORT as string),
    max: 10,
  }),
});

export const db = new Kysely<DB>({
  dialect,
});
