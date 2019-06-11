"use strict"
const { Pool } = require("pg");

const credentials = {
  user: "postgres",
  password: "Market18!",
  host: "localhost",
  port: 5432,
  database: "TriviaDB",
  ssl: false
};

module.exports = new Pool(credentials);
