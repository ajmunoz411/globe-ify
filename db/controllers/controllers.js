const { insertTrack, insertRanking, getTracks } = require('../models/models');

const controllers = {
  getTracks: async (req, res) => {
    const { countryCode, quantity } = req.params;

    try {
      const tracks = await getTracks(countryCode, quantity);
      res.status(200).send(tracks);
    } catch (err) {
      console.log('err in ctrl getTracks', err.stack);
    }
  },
};

module.exports = controllers;
