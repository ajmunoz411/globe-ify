// import axios from 'axios';
const axios = require('axios');
// import qs from 'qs';
const qs = require('qs');
// import config from '../config';
const config = require('../config');

module.exports = {

  getAuth: async () => {
    const clientId = config.SPOTID;
    const clientSecret = config.SPOTSEC;

    const headers = {
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + base64(clientId + ':' + clientSecret),
      },
      // auth: {
      //   username: clientId,
      //   password: clientSecret,
      // },
    };
    const data = {
      grant_type: 'client_credentials',
    };

    try {
      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        qs.stringify(data),
        headers
      );
      console.log(response.data.access_token);
      return response.data.access_token;
    } catch (error) {
      console.log(error);
    }
  },
};

// module.exports = getAuth;