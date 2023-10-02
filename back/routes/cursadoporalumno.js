const express = require('express');

const router = express.Router();
const cursadoPorAlumnoController = require('../controllers/cursadoporalumno');

router.get('/:id', cursadoPorAlumnoController.getCursadoPorAlumnoById);
router.post('/', cursadoPorAlumnoController.createCursadoPorAlumno);
router.put('/:id', cursadoPorAlumnoController.updateCursadoPorAlumnoById);
router.delete('/', cursadoPorAlumnoController.deleteCursadoPorAlumno);

module.exports = router;