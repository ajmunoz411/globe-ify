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
  // axios(options)
  //   .then((response) => {
  //     res.status(200).send(response.data);
  //   })
  //   .catch((err) => {
  //     res.status(400).send(err);
  //   });
  const auth = await axios(options);
  config.TOKEN = auth.data.access_token;
};

// module.exports = {
//   getAuth,
// };

getAuth();
