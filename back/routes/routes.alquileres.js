const express = require('express');
const router = express.Router();
const db = require('../models');
const controller = require('../controllers/alquiler.controller')

// Create
router.post('/',controller.alquilar);

module.exports = router;