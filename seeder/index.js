const seedCountries = require('./seedCountries');
const seedTracksAndRankings = require('./seedTracksAndRankings');

const seed = async () => {
  await seedCountries();
  await seedTracksAndRankings();
};

seed();
