const router = require('express').Router();
// const dbhelpers = require('../db/dbhelpers');
const spothelpers = require('./spothelpers');
const controllers = require('../db/controllers/controllers');

router
  // .get('/db/:country/:quantity', dbhelpers.getTracks)
  .get('/db/:countryCode/:quantity', controllers.getTracks)
  .get('/track', spothelpers.getTrack)
  .get('/list/tracks/:list', spothelpers.getTracksList)
  .get('/features/:list', spothelpers.getTracksFeatures)
  // .get('/auth', spothelpers.getAuth);

module.exports = router;
