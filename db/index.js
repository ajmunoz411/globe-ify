const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'globeify',
  port: 5432,
  allowExitOnIdle: true,
});

module.exports = pool;

// pool.connect((err) => {
//   if (err) {
//     console.log('err connecting to psql', err.stack);
//   } else {
//     console.log('connected to MVPSpotify db');
//   }
// });

// module.exports = {
//   query: (text, params, callback) => pool.query(text, params, callback),
// };
