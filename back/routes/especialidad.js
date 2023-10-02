const express = require('express');

const router = express.Router();
const especialidadController = require('../controllers/especialidad');

router.get('/', especialidadController.allEspecialidades);

module.exports = router;
