const router = require('express').Router();
const dbhelpers = require('../db/dbhelpers');
const spothelpers = require('./spothelpers');
const auth = require('./auth');

router
  .get('/db/:country', dbhelpers.getTracks)
  .get('/test', spothelpers.getTrack)
  .get('/auth', spothelpers.getAuth);
  // .get('/test', (req, res) => {
  //   res.send('hello');
  // });
  // .get('/auth', auth.getAuth);

module.exports = router;
