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

  // insertTrack: async (trackObj) => {
  //   const {
  //     track, artist, newUrl, trackId,
  //   } = trackObj;

  //   const queryStr = `
  //     INSERT INTO globeify.tracks (name, artist, url, spotify_id)
  //     VALUES ($$${track}$$, $$${artist}$$, '${newUrl}', '${trackId}')
  //     ON CONFLICT DO NOTHING;
  //   `;
  //   await db.query(queryStr, (err) => {
  //     if (err) {
  //       console.log(`err inserting ${track} into db`, err.stack);
  //     }
  //   });
  // },
};

module.exports = dbhelpers;
