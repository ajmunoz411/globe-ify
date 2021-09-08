const keys = {
  0: 'C',
  1: 'C#',
  2: 'D',
  3: 'D#',
  4: 'E',
  5: 'F',
  6: 'F#',
  7: 'G',
  8: 'G#',
  9: 'A',
  10: 'A#',
  11: 'B',
};

const modes = {
  0: 'Minor',
  1: 'Major',
};

const dataHelp = {
  average: (total, quantity) => total / quantity,
  roundedAverage: (total, quantity) => Math.round(total / quantity),
  msToMins: (ms) => ms / 1000 / 60,
  minsToPercentage: (mins) => (mins / 6) * 100,
  dbToPercentage: (db) => (10 ** (db / 10)) * 100,
  keyToString: (keyNum) => keys[keyNum],
  modeToString: (modeNum) => modes[modeNum],
};

const theoryHelp = {
  duration: (minutes) => {
    const min = Math.floor(minutes);
    const sec = Math.round((minutes - min) * 60);
    return `${min} minutes, ${sec} seconds`;
  },
  loudness: (avgDb) => {
    const db = avgDb.toFixed(2);
    return `${db} db`;
  },
};

module.exports = {
  dataHelp,
  theoryHelp,
};
