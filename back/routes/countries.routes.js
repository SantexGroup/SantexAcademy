const express = require('express');

const router = express.Router();
const CountryController = require('../controllers/countries.controllers');

router.get('/all', CountryController.countriesGet);

module.exports = router;
