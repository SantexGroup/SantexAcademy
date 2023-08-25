const express = require('express');

const router = express.Router();

const SexsRoutes = require('../controllers/sexs.controller');

router.get('/all', SexsRoutes.sexGet);

module.exports = router;
