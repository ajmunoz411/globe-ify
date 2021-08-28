const fs = require('fs');
const path = require('path');
const LineInputStream = require('line-input-stream');

const db = require('./index');

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
    track, artist, newUrl, trackId,
  };
};

const insertTrack = async (trackObj) => {
  const {
    track, artist, newUrl, trackId,
  } = trackObj;

  const queryStr = `
    INSERT INTO globeify.tracks (name, artist, url, spotify_id)
    VALUES ($$${track}$$, $$${artist}$$, '${newUrl}', '${trackId}')
    ON CONFLICT DO NOTHING;
  `;
  await db.query(queryStr, (err) => {
    if (err) {
      console.log(`err inserting ${track} into db`, err.stack);
    }
  });
};

const dataEntryCsv = (countryCode) => {
  const readPath = path.join(__dirname, `../dataOrig/regional-${countryCode}-weekly-latest.csv`);
  const readStream = LineInputStream(fs.createReadStream(readPath, { flags: 'r' }));

  readStream.setDelimiter('\n');

  readStream.on('line', (line) => {
    if (line.slice(0, 1) !== 'P') {
      Promise.resolve(formatLine(line))
        .then((formatted) => {
          insertTrack(formatted);
        })
        .catch((err) => {
          console.log(`err at ${line}`, err.stack);
        });
    }
  });

  readStream.on('error', (err) => {
    console.log('error reading CSV', err.stack);
  });

  readStream.on('end', () => {
    console.log(`${countryCode} data complete`);
  });
};

dataEntryCsv('test');

// const codes = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'bo', 'br', 'ca', 'ch', 'cl', 'co', 'cr', 'cz', 'de', 'dk', 'do', 'ec', 'ee', 'eg', 'es', 'fi', 'fr', 'gb', 'global', 'gr', 'gt', 'hk', 'hn', 'hu', 'id', 'ie', 'il', 'in', 'is', 'it', 'jp', 'kr', 'lt', 'lu', 'lv', 'ma', 'mx', 'my', 'ni', 'nl', 'no', 'nz', 'pa', 'pe', 'ph', 'pl', 'pt', 'py', 'ro', 'ru', 'sa', 'se', 'sg', 'sk', 'sv', 'th', 'tr', 'tw', 'ua', 'us', 'uy', 'vn', 'za'];

// codes.map((code) => (
//   cleanCSV(code)
// ));
