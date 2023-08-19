const express = require('express');

const router = express.Router();
const surveyorController = require('../controllers/surveyorController');
const isAdmin = require('../middleware/isAdmin'); // middleware para verificar si es un administrador

// Ruta para crear un nuevo encuestador (solo accesible por un administrador)
router.post('/', isAdmin, surveyorController.createSurveyor);

// Ruta para obtener todos los encuestadores
router.get('/', surveyorController.getAllSurveyors);

// Ruta para obtener un encuestador por su id
router.get('/:id', surveyorController.getSurveyorById);

// Ruta para actualizar un encuestador por ID (solo accesible por un administrador)
router.put('/:id', isAdmin, surveyorController.updateSurveyor);

// Ruta para eliminar un encuestador por ID (solo accesible por un administrador)
router.delete('/:id', isAdmin, surveyorController.deleteSurveyor);

// Ruta para traer las encuestas realizadas por un encuestador
router.get('/:id/surveys', surveyorController.getSurveysBySurveyorId);

// Ruta para traer las encuestas realizadas por determinado encuestador entre determinadas fechas
router.get('/:id/surveys/by-dates', surveyorController.getSurveysByDateRange);

module.exports = router;
