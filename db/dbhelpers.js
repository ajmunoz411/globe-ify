const db = require('./index');

const dbhelpers = {
  getTracks: (req, res) => {
    const { country, quantity } = req.params;
    const queryStr = `SELECT * FROM "spotifyChart"."${country}" LIMIT ${quantity};`;
    db.query(queryStr, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data.rows);
      }
    });
  },
};

module.exports = dbhelpers;
