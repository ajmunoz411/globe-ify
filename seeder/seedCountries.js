const { countries } = require('../data/countryCodeCoord');
const { insertCountry } = require('../db/models/models');

const addCountries = () => {
  countries.forEach((country) => {
    insertCountry(country)
      .catch((err) => {
        console.log(err.stack);
      });
  });
};

module.exports = addCountries;
