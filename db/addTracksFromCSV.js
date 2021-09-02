/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
const fs = require('fs');
const path = require('path');
const LineInputStream = require('line-input-stream');
const axios = require('axios');
const config = require('../config');

const db = require('./index');
const spotHelpers = require('../server/spothelpers');

const formatLine = (line) => {
  const [
    rank, track, artist, streams, url,
  ] = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

  const urlSplitIdx = url.indexOf('track/');
  const urlFirstHalf = url.slice(0, urlSplitIdx);
  const urlSecondHalf = url.slice(urlSplitIdx);
  const newUrl = `${urlFirstHalf}embed/${urlSecondHalf}`;
  const trackId = url.slice(urlSplitIdx + 6);

  return {
    track, artist, newUrl, trackId, rank, streams,
  };
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
  `;

  await db.query(queryStr, (err) => {
    if (err) {
      console.log(`err inserting ranking ${rank} for ${countryCode}`, err.stack);
    }
  });
};

const getAudioFeaturesForList = async (trackObj) => {
  const list = Object.keys(trackObj).join(',');

  const options = {
    method: 'get',
    url: `https://api.spotify.com/v1/audio-features?ids=${list}`,
    headers: {
      Authorization: `Bearer ${config.TOKEN}`,
    },
  };

  await axios(options)
    .then((response) => {
      response.data.audio_features.forEach((allFeatures) => {
        if (!allFeatures) {
          return;
        }
        const {
          danceability, energy, key, loudness, mode, speechiness, acousticness,
          instrumentalness, liveness, valence, tempo, duration_ms, time_signature,
        } = allFeatures;

        const selectFeatures = {
          danceability, energy, key, loudness, mode, speechiness, acousticness,
          instrumentalness, liveness, valence, tempo, duration_ms, time_signature,
        };

        Object.assign(trackObj[allFeatures.id], selectFeatures);
      });
    })
    .catch((err) => {
      console.log('err', err);
    });

  const featuresDefaults = {
    danceability: null,
    energy: null,
    key: null,
    loudness: null,
    mode: null,
    speechiness: null,
    acousticness: null,
    instrumentalness: null,
    liveness: null,
    valence: null,
    tempo: null,
    duration_ms: null,
    time_signature: null,
  };

  Object.entries(trackObj).forEach(([spotifyId, track]) => {
    if (track.danceability === undefined) {
      Object.assign(trackObj[spotifyId], featuresDefaults);
    }
  });

  return trackObj;
};

const insertTracksAndRankings = (tracksObj, countryCode) => {
  Object.entries(tracksObj).forEach((track) => {
    const trackObj = track[1];
    insertTrack(trackObj)
      .then(() => {
        insertRanking(trackObj, countryCode);
      });
  });
};

const dataEntryCsv = async (countryCode) => {
  const readPath = path.join(__dirname, `../dataOrig/regional-${countryCode}-weekly-latest.csv`);
  const readStream = LineInputStream(fs.createReadStream(readPath, { flags: 'r' }));

  readStream.setDelimiter('\n');

  let lineCount = -1;
  const ids1 = {};
  const ids2 = {};

  readStream.on('line', async (line) => {
    lineCount++;
    if (lineCount !== 0) {
      const formatted = formatLine(line);
      const id = formatted.trackId;

      if (lineCount <= 100) {
        ids1[id] = formatted;
      } else {
        ids2[id] = formatted;
      }
    }
  });

  readStream.on('error', (err) => {
    console.log('error reading CSV', err.stack);
  });

  readStream.on('end', async () => {
    const tracksListObj100 = await getAudioFeaturesForList(ids1);
    const tracksListObj200 = await getAudioFeaturesForList(ids2);
    insertTracksAndRankings(tracksListObj100, countryCode);
    insertTracksAndRankings(tracksListObj200, countryCode);
  });
};

const codes = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'bo', 'br', 'ca', 'ch', 'cl', 'co', 'cr', 'cz', 'de', 'dk', 'do', 'ec', 'ee', 'eg', 'es', 'fi', 'fr', 'gb', 'global', 'gr', 'gt', 'hk', 'hn', 'hu', 'id', 'ie', 'il', 'in', 'is', 'it', 'jp', 'kr', 'lt', 'lu', 'lv', 'ma', 'mx', 'my', 'ni', 'nl', 'no', 'nz', 'pa', 'pe', 'ph', 'pl', 'pt', 'py', 'ro', 'ru', 'sa', 'se', 'sg', 'sk', 'sv', 'th', 'tr', 'tw', 'ua', 'us', 'uy', 'vn', 'za'];

const seedBatch = (batch) => {
  batch.forEach((countryCode) => {
    dataEntryCsv(countryCode);
  });
};

const interval = () => {
  setInterval(() => {
    if (codes.length > 0) {
      seedBatch(codes.splice(0, 5));
    } else {
      console.log('seed complete');
    }
  }, 1000);
};

interval();

// getAudioFeaturesForList(ids1)
//   .then((trackObj) => {
//     Object.entries(trackObj).forEach(([key, value]) => {
//       insertTrack(value)
//         .then(() => {
//           insertRanking(value, countryCode);
//         });
//     });
//   });
// getAudioFeaturesForList(ids2)
//   .then((trackObj) => {
//     Object.entries(trackObj).forEach(([key, value]) => {
//       insertTrack(value)
//         .then(() => {
//           insertRanking(value, countryCode);
//         });
//     });
//   });

// const getAudioFeaturesForTrack = async (spotifyId) => {
//   const options = {
//     method: 'get',
//     url: `https://api.spotify.com/v1/audio-features/${spotifyId}`,
//     headers: {
//       Authorization: `Bearer ${config.TOKEN}`,
//     },
//   };

//   const data = await axios(options)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       console.log('err getting audio features', err);
//     });
//   return data;
// };

// const getTrackIds = async (countryCode) => {
//   const queryStr = `
//     SELECT ROW_TO_JSON(z) AS data
//     FROM (
//       SELECT (
//         SELECT JSON_AGG(x) AS first
//         FROM (
//           SELECT rank, spotify_id FROM globeify.rankings
//           INNER JOIN globeify.tracks ON globeify.rankings.track_id=globeify.tracks.id
//           WHERE country_id=(SELECT id FROM globeify.countries WHERE code='${countryCode}')
//           AND rank <= 100
//           ORDER BY rank
//         ) x
//       ), (
//         SELECT json_agg(y) AS second
//         FROM (
//           SELECT rank, spotify_id FROM globeify.rankings
//           INNER JOIN globeify.tracks ON globeify.rankings.track_id=globeify.tracks.id
//           WHERE country_id=(SELECT id FROM globeify.countries WHERE code='${countryCode}')
//           AND rank >= 101
//           ORDER BY rank
//         ) y
//       )
//     ) z
//   `;

//   const data = await db.query(queryStr);
//   const { first, second } = data.rows[0].data;
// };

// await getAudioFeaturesForTrack(id)
//   .then((allFeatures) => {
//     const {
//       danceability, energy, key, loudness, mode, speechiness, acousticness,
//       instrumentalness, liveness, valence, tempo, duration_ms, time_signature,
//     } = allFeatures;
//     const selectFeatures = {
//       danceability, energy, key, loudness, mode, speechiness, acousticness,
//       instrumentalness, liveness, valence, tempo, duration_ms, time_signature,
//     };
//     return selectFeatures;
//   })
//   .then((selectFeatures) => {
//     const extended = Object.assign(formatted, selectFeatures);
//     return extended;
//   })
//   .then(async (extended) => {
//     await insertTrack(extended);
//     // return {
//     //   track: extended.track,
//     //   trackId: extended.trackId,
//     //   rank: extended.rank,
//     //   streams: extended.streams,
//     // };
//   })
//   .then(async () => {
//     await insertRanking(formatted.trackId, formatted.rank, formatted.streams, countryCode);
//   })
//   // .then((trackObj) => {
//   //   insertRanking(trackObj, countryCode);
//   // })
//   .catch((err) => {
//     console.log(`err at ${line}`, err.stack);
//   });

// insertTrack(formatted)
//   .then(() => {
//     insertRanking(formatted, 'tw');
//   })
//   .catch((err) => {
//     console.log(`err at ${line}`, err.stack);
//   });
