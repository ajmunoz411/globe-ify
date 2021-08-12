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

const codes = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'bo', 'br', 'ca', 'ch', 'cl', 'co', 'cr', 'cz', 'de', 'dk', 'do', 'ec', 'ee', 'eg', 'es', 'fi', 'fr', 'gb', 'global', 'gr', 'gt', 'hk', 'hn', 'hu', 'id', 'ie', 'il', 'in', 'is', 'it', 'jp', 'kr', 'lt', 'lu', 'lv', 'ma', 'mx', 'my', 'ni', 'nl', 'no', 'nz', 'pa', 'pe', 'ph', 'pl', 'pt', 'py', 'ro', 'ru', 'sa', 'se', 'sg', 'sk', 'sv', 'th', 'tr', 'tw', 'ua', 'us', 'uy', 'vn', 'za'];

codes.map((code) => (
  cleanCSV(code)
));

const writePath = path.join(__dirname, './codesql.sql');
const writeStream = fs.createWriteStream(writePath, { flags: 'w' });

codes.forEach((country) => {
  const source = path.join(__dirname, `../dataClean/cleaned-${country}-weekly-latest.csv`);
  writeStream.write(
    `CREATE TABLE "spotifyChart"."${country}"
    (
      rank integer NOT NULL,
      track character varying(250) COLLATE pg_catalog."default" NOT NULL,
      artist character varying(250) COLLATE pg_catalog."default" NOT NULL,
      streams integer NOT NULL,
      url character varying(250) COLLATE pg_catalog."default" NOT NULL,
      id character varying(250) COLLATE pg_catalog."default"
    )

    TABLESPACE pg_default;

    ALTER TABLE "spotifyChart"."${country}"
      OWNER TO postgres;

    COPY "spotifyChart"."${country}"
      FROM '${source}'
      NULL 'null'
      DELIMITER ','
      CSV HEADER;\n\n`,
  );
});

writeStream.on('error', (err) => {
  console.log('error writing sql', err);
});
