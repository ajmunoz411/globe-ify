const { insertTrack, insertRanking, getTracks } = require('../models/models');
const { getAuth } = require('../models/auth');

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

  getAuth: async (req, res) => {
    try {
      const auth = await getAuth();
      res.status(200).send(auth);
    } catch (err) {
      console.log('err in ctrl getAuth', err.stack);
    }
  },
};

module.exports = controllers;
