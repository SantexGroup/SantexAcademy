const express = require('express');

const router = express.Router();

const MaritalController = require('../controllers/marital.controller');

router.get('/all', MaritalController.maritalGet);

module.exports = router;
