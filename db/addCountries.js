const countries = require('../data/countryCodeCoord');
const db = require('./index');

const insertCountry = async (country) => {
  const { name, code, pos } = country;
  const coord = `point(${pos[1]}, ${pos[0]})`;
  const queryStr = `
    INSERT INTO globeify.countries (code, name, coordinate)
    VALUES ('${code}', '${name}', ${coord})
  `;
  await db.query(queryStr, (err) => {
    if (err) {
      console.log(`err inserting ${name}`, err.stack);
    }
  });
};

const addCountries = () => {
  countries.forEach((country) => {
    insertCountry(country)
      .catch((err) => {
        console.log(err.stack);
      });
  });
};

addCountries();
