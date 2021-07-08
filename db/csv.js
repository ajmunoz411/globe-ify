const fs = require('fs');
const path = require('path');
const LineInputStream = require('line-input-stream');

const cleanCSV = (countryCode) => {
  const readPath = path.join(__dirname, `../dataOrig/regional-${countryCode}-weekly-latest.csv`);
  const readStream = LineInputStream(fs.createReadStream(readPath, { flags: 'r' }));
  const writePath = path.join(__dirname, `../dataClean/cleaned-${countryCode}-weekly-latest.csv`);
  const writeStream = fs.createWriteStream(writePath, { flags: 'w' });

  readStream.setDelimiter('\n');

  readStream.on('line', (line) => {
    if (line.slice(0, 1) !== 'P') {
      const urlIndex = line.indexOf('https');
      const url = line.slice(urlIndex);
      const rest = line.slice(0, urlIndex);
      const index = url.indexOf('track/');
      const firstHalf = url.slice(0, index);
      const secondHalf = url.slice(index);
      const newUrl = `${firstHalf}embed/${secondHalf}`;
      const id = url.slice(index + 6);
      writeStream.write(`${rest}${newUrl},${id}\n`);
    } else {
      writeStream.write(`${line}\n`);
    }
  });

  writeStream.on('error', (err) => {
    console.log('error writing CSV', err);
  });

  readStream.on('error', (err) => {
    console.log('error reading CSV', err);
  });
};

const codes = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'bo', 'br', 'ca', 'ch', 'cl', 'co', 'cr', 'cz', 'de', 'dk', 'do', 'ec', 'ee', 'es', 'fi', 'fr', 'global', 'gr', 'gt', 'hk', 'hn', 'hu', 'id', 'ie', 'il', 'in', 'is', 'it', 'jp', 'kr', 'lt', 'lu', 'lv', 'ma', 'mx', 'my', 'ni', 'nl', 'no', 'nz', 'pa', 'pe', 'ph', 'pl', 'pt', 'py', 'ro', 'ru', 'sa', 'se', 'sg', 'sk', 'sv', 'th', 'tr', 'tw', 'ua', 'us', 'uy', 'vn', 'za'];

codes.map((code) => (
  cleanCSV(code)
));
