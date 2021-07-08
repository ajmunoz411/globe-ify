// const config = '../config.js';
const axios = require('axios');
const qs = require('qs');
const config = require('../config');

const spotHelpers = {
  getTrack: (req, res) => {
    const { id } = req.params;
    const options = {
      method: 'get',
      url: `https://api.spotify.com/v1/tracks/${id}`,
      headers: {
        Authorization: `Bearer ${config.TOKEN}`,
      },
    };

    axios(options)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  getTracksList: (req, res) => {
    // console.log('hi from trackslist');
    const { list } = req.params;
    // console.log('list', list);
    const options = {
      method: 'get',
      url: `https://api.spotify.com/v1/tracks?ids=${list}`,
      headers: {
        Authorization: `Bearer ${config.TOKEN}`,
      },
    };

    axios(options)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  getTracksFeatures: (req, res) => {
    const { list } = req.params;

    const options = {
      method: 'get',
      url: `https://api.spotify.com/v1/audio-features?ids=${list}`,
      headers: {
        Authorization: `Bearer ${config.TOKEN}`,
      },
    };

    axios(options)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  getAuth: (req, res) => {
    const data = qs.stringify({
      grant_type: 'client_credentials',
    });
    const options = {
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: config.SPOTID,
        password: config.SPOTSEC,
      },
      data,
    };
    axios(options)
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
};

module.exports = spotHelpers;