const router = require('express').Router();
const controllers = require('../db/controllers/controllers');

router
  .get('/db/:countryCode/:quantity', controllers.getTracks)
  .get('/auth', controllers.getAuth);

module.exports = router;
