/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
const fs = require('fs');
const path = require('path');
const LineInputStream = require('line-input-stream');
const axios = require('axios');
const config = require('./config');

const { insertTrack, insertRanking } = require('./db/models/models');
const { codes } = require('./data/countryCodeCoord');
const feats = require('./data/audioFeats');

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
        if (!allFeatures) { return; }
        const features = Object.keys(feats);
        const selectFeatures = Object.fromEntries((features).map((key) => [key, allFeatures[key]]));
        Object.assign(trackObj[allFeatures.id], selectFeatures);
      });
    })
    .catch((err) => {
      console.log(err.stack);
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
      .then(() => { insertRanking(trackObj, countryCode); });
  });
};

const seedCountryCSV = (countryCode) => {
  const readPath = path.join(__dirname, `./data/csv/regional-${countryCode}-weekly-latest.csv`);
  const readStream = LineInputStream(fs.createReadStream(readPath, { flags: 'r' }));
  readStream.setDelimiter('\n');

  let lineCount = -1;
  const first100Tracks = {};
  const second100Tracks = {};

  readStream.on('line', async (line) => {
    lineCount++;
    if (lineCount !== 0) {
      const formatted = formatLine(line);
      const spotifyId = formatted.trackId;

      if (lineCount <= 100) {
        first100Tracks[spotifyId] = formatted;
      } else {
        second100Tracks[spotifyId] = formatted;
      }
    }
  });

  readStream.on('error', (err) => {
    console.log('error reading CSV', err.stack);
  });

  readStream.on('end', async () => {
    const tracksListObj100 = await getAudioFeaturesForList(first100Tracks);
    const tracksListObj200 = await getAudioFeaturesForList(second100Tracks);
    const allTracksList = Object.assign(tracksListObj100, tracksListObj200);
    insertTracksAndRankings(allTracksList, countryCode);
  });
};

const seedBatch = (batch) => {
  batch.forEach((countryCode) => {
    seedCountryCSV(countryCode);
  });
};

const startIntervalSeed = () => {
  const interval = setInterval(() => {
    if (codes.length > 0) {
      seedBatch(codes.splice(0, 5));
    } else {
      console.log('seed complete');
      clearInterval(interval);
    }
  }, 1000);
};

startIntervalSeed();
