import pg from "pg";
import "dotenv/config"

const {Pool} = pg;

const connectionString = process.env.DATABASE_URL

export const db = new Pool({
  connectionString,
  allowExitOnIdle: true
});

