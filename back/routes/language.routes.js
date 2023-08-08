const express = require('express');

const router = express.Router();
const langujeController = require('../controllers/language.controller');

router.post('/new', langujeController.addLanguageToProfile);

module.exports = router;
