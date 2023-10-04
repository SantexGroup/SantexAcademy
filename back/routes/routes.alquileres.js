const express = require('express');
const router = express.Router();
const controller = require('../controllers/alquiler.controller')

// Create
router.post('/',controller.alquilar);
router.get('/:id',controller.alquileresById)
router.get('/',controller.alquileres)

module.exports = router;