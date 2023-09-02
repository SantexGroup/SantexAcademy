const express = require('express');
const direccionController = require('../controllers/direccion-controller');

const router = express.Router();

router.get('/provincias', direccionController.listProvincia);

module.exports = router;