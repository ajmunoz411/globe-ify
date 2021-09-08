const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'globeify',
  port: 5432,
  allowExitOnIdle: true,
});

module.exports = pool;
