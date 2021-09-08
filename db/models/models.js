/* eslint-disable camelcase */
const db = require('../index');

const insertCountry = async (country) => {
  const { name, code, pos } = country;
  const coord = `point(${pos[1]}, ${pos[0]})`;
  const queryStr = `
    INSERT INTO globeify.countries (code, name, coordinate)
    VALUES ('${code}', '${name}', ${coord})
  `;
  await db.query(queryStr, (err) => {
    if (err) {
      console.log(`err inserting ${name}`, err.stack);
    }
  });
};

const insertTrack = async (trackObj) => {
  const {
    track, artist, newUrl, trackId, danceability, energy, key, loudness, mode, speechiness,
    acousticness, instrumentalness, liveness, valence, tempo, duration_ms, time_signature,
  } = trackObj;

  const queryStr = `
    INSERT INTO globeify.tracks (name, artist, url, spotify_id, danceability, energy, key, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo, duration, meter)
    VALUES ($trk$${track}$trk$, $art$${artist}$art$, '${newUrl}', '${trackId}', ${danceability}, ${energy}, ${key}, ${loudness}, ${mode}, ${speechiness}, ${acousticness}, ${instrumentalness}, ${liveness}, ${valence}, ${tempo}, ${duration_ms}, ${time_signature})
    ON CONFLICT DO NOTHING
  `;

  const data = await db.query(queryStr);
  return data;
};

const insertRanking = async (trackObj, countryCode) => {
  const {
    trackId, rank, streams,
  } = trackObj;

  const queryStr = `
    INSERT INTO globeify.rankings (rank, streams, country_id, track_id)
    VALUES (
      ${rank},
      ${streams},
      ( SELECT id FROM globeify.countries WHERE code='${countryCode}' ),
      ( SELECT id FROM globeify.tracks WHERE spotify_id='${trackId}' )
    )
    ON CONFLICT DO NOTHING
  `;

  await db.query(queryStr, (err) => {
    if (err) {
      console.log(`err inserting ranking ${rank} for ${countryCode}`, err.stack);
    }
  });
};

const getTracks = async (countryCode, quantity) => {
  const queryStr = `
    SELECT rank, streams, name, artist, url, spotify_id, danceability, energy, key, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo, duration, meter
    FROM globeify.rankings
    INNER JOIN globeify.tracks ON globeify.rankings.track_id=globeify.tracks.id
    WHERE country_id=(SELECT id FROM globeify.countries WHERE code='${countryCode}')
    ORDER BY rank
    LIMIT ${quantity};
  `;

  const data = await db.query(queryStr);
  return data.rows;
};

module.exports = {
  insertCountry,
  insertTrack,
  insertRanking,
  getTracks,
};
