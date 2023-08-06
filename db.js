const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "participant",
    password: "admin",
    port: 5432,
    errno: -111,
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 5432
});

module.exports = pool;