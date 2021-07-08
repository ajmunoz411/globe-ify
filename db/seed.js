const path = require('path');
const db = require('./index');

const seedCSV = (countryCode) => {
  const source = path.join(__dirname, `../dataClean/cleaned-${countryCode}-weekly-latest.csv`);

  db.query(
    `COPY products.${table}
    FROM '${source}'
    NULL 'null'
    DELIMITER ','
    CSV HEADER`,
  )
    .then(() => console.log('seeded successfully'))
    .catch((err) => console.log('err', err));
};