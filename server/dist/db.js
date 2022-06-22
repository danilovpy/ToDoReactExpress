"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "postgresLULE",
    host: "localhost",
    port: 5432,
    database: "todo",
});
exports.default = pool;
