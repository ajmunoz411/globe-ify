const router = require('express').Router();
const dbhelpers = require('../db/dbhelpers');
const spothelpers = require('./spothelpers');

router
  .get('/db/:country', dbhelpers.getTracks)
  .get('/track', spothelpers.getTrack)
  .get('/list/tracks/:list', spothelpers.getTracksList)
  .get('/features/:list', spothelpers.getTracksFeatures)
  .get('/auth', spothelpers.getAuth);

module.exports = router;
