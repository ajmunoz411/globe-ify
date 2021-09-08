const axios = require('axios');
const qs = require('qs');
const config = require('../../config');

const getAuth = async () => {
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
  const auth = await axios(options);
  return auth.data.access_token;
};

module.exports = {
  getAuth,
};
