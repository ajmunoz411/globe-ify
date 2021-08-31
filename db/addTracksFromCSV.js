/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
const fs = require('fs');
const path = require('path');
const LineInputStream = require('line-input-stream');
const config = require('../config');

const axios = require('axios');
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
    track, artist, newUrl, trackId, danceability, energy, key, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo, duration_ms, time_signature,
  } = trackObj;

  const queryStr = `
    INSERT INTO globeify.tracks (name, artist, url, spotify_id, danceability, energy, key, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo, duration, meter)
    VALUES ($$${track}$$, $$${artist}$$, '${newUrl}', '${trackId}', ${danceability}, ${energy}, ${key}, ${loudness}, ${mode}, ${speechiness}, ${acousticness}, ${instrumentalness}, ${liveness}, ${valence}, ${tempo}, ${duration_ms}, ${time_signature})
    ON CONFLICT DO NOTHING
    RETURNING globeify.tracks.id;
  `;
  // const data = await db.query(queryStr, (err, data2) => {
  //   if (err) {
  //     console.log(`err inserting ${track} into db`, err.stack);
  //   } else {
  //     return data2.rows[0].id;
  //     // console.log('data2', data2);
  //   }
  // });
  const data = await db.query(queryStr)
    .then((data2) => {
      return data2.rows[0].id;
    })
  // return trackObj;
  return data;
};

const insertRanking = async (trackObj, countryCode) => {
  const {
    track, artist, newUrl, trackId, rank, streams,
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
      console.log(`err inserting ranking for ${countryCode} - ${track}`, err.stack);
    }
  });
};

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

const getAudioFeaturesForTrack = async (spotifyId) => {
  const options = {
    method: 'get',
    url: `https://api.spotify.com/v1/audio-features/${spotifyId}`,
    headers: {
      Authorization: `Bearer ${config.TOKEN}`,
    },
  };

  const data = await axios(options)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log('err getting audio features', err.stack);
    });
  return data;
};

// getTrackIds('tw');

const dataEntryCsv = (countryCode) => {
  const readPath = path.join(__dirname, `../dataOrig/regional-${countryCode}-weekly-latest.csv`);
  const readStream = LineInputStream(fs.createReadStream(readPath, { flags: 'r' }));

  readStream.setDelimiter('\n');

  let lineCount = -1;
  // const ids1 = [];
  // const ids2 = [];

  readStream.on('line', (line) => {
    lineCount++;
    if (lineCount !== 0 && lineCount < 6) {
    // if (line.slice(0, 1) !== 'P') {
    //   Promise.resolve(formatLine(line))
    //     .then((formatted) => {
    //       insertTrack(formatted);
    //     })
    //     // .then((formatted) => {
    //     //   console.log('formatted', formatted);
    //     // })
    //     .catch((err) => {
    //       console.log(`err at ${line}`, err.stack);
    //     });
    // }
      const formatted = formatLine(line);
      const id = formatted.trackId;
      getAudioFeaturesForTrack(id)
        .then((allFeatures) => {
          const {
            danceability, energy, key, loudness, mode, speechiness, acousticness,
            instrumentalness, liveness, valence, tempo, duration_ms, time_signature,
          } = allFeatures;
          const selectFeatures = {
            danceability, energy, key, loudness, mode, speechiness, acousticness,
            instrumentalness, liveness, valence, tempo, duration_ms, time_signature,
          };
          return selectFeatures;
        })
        .then((selectFeatures) => {
          const extended = Object.assign(formatted, selectFeatures);
          return extended;
        })
        .then((extended) => {
          return insertTrack(extended);
          // return {
          //   track: extended.track,
          //   trackId: extended.trackId,
          //   rank: extended.rank,
          //   streams: extended.streams,
          // };
        })
        .then((trackId) => {
          // console.log('data', data);
          insertRanking(trackId, countryCode);
        })
        // .then((trackObj) => {
        //   insertRanking(trackObj, countryCode);
        // })
        .catch((err) => {
          console.log(`err at ${line}`, err.stack);
        });
      // console.log('audioFeat', audioFeat);
      // if (lineCount <= 100) {
      //   ids1.push(id);
      // } else {
      //   ids2.push(id);
      // }
      // insertTrack(formatted)
      //   .then(() => {
      //     insertRanking(formatted, 'tw');
      //   })
      //   .catch((err) => {
      //     console.log(`err at ${line}`, err.stack);
      //   });
    }
  });

  readStream.on('error', (err) => {
    console.log('error reading CSV', err.stack);
  });

  readStream.on('end', () => {
    console.log(`${countryCode} data complete`);
  });
};

dataEntryCsv('sg');

// const codes = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'bo', 'br', 'ca', 'ch', 'cl', 'co', 'cr', 'cz', 'de', 'dk', 'do', 'ec', 'ee', 'eg', 'es', 'fi', 'fr', 'gb', 'global', 'gr', 'gt', 'hk', 'hn', 'hu', 'id', 'ie', 'il', 'in', 'is', 'it', 'jp', 'kr', 'lt', 'lu', 'lv', 'ma', 'mx', 'my', 'ni', 'nl', 'no', 'nz', 'pa', 'pe', 'ph', 'pl', 'pt', 'py', 'ro', 'ru', 'sa', 'se', 'sg', 'sk', 'sv', 'th', 'tr', 'tw', 'ua', 'us', 'uy', 'vn', 'za'];

// codes.map((code) => (
//   cleanCSV(code)
// ));
