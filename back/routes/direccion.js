const express = require('express');
const direccionController = require('../controllers/direccion-controller');

const router = express.Router();

router.get('/provincias', direccionController.listProvincia);
router.get('/localidades/:idProv', direccionController.listLocalidad);

module.exports = router;