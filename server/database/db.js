const { Pool } = require("pg");

const db = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWROD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
});

module.exports = db;
