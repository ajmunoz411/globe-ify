const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'MVPSpotify',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.log('err connecting to psql', err.stack);
  } else {
    console.log('connected to MVPSpotify db');
  }
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
