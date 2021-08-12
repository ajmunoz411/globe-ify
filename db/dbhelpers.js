const db = require('./index');

const dbhelpers = {
  getTracks: (req, res) => {
    const { country, quantity } = req.params;
    // console.log('country', country);
    const queryStr = `SELECT * FROM "spotifyChart"."${country}" LIMIT ${quantity};`;
    db.query(queryStr, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        console.log('data.rows', data.rows);
        res.status(200).send(data.rows);
      }
    });
  },
};

module.exports = dbhelpers;
