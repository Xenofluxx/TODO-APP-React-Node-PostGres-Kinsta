// Dotenv to hold sensitive data, 'overwrites' user .env and uses .env found in the same folder.
require("dotenv").config({ override: true });
console.log(process.env.USERNAME);
// PostGreSQL
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: "todoapp",
});

module.exports = pool;
