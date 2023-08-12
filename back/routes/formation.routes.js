const express = require('express');
const { formationValidations } = require('../validations');
const { checkValidationResult } = require('../middleware');

const router = express.Router();
const formationController = require('../controllers/formation.controller');

const createValidation = [formationValidations.create, checkValidationResult];
const updateValidation = [formationValidations.update, checkValidationResult];

/**
 * Ruta para obtener una lista de FORMATIONES (GET /formations).
 *
 * Puede permitir parámetros de consulta para filtrar los resultados, paginación
 * para manejar grandes conjuntos de datos y ordenación para especificar el orden de los resultados.
 */
router.get('/', formationController.getFormations);

/**
 * Ruta para obtener una FORMACION específica, por id (GET /formations/{id}).
 */
router.get('/:id', formationController.getFormationById);

/**
 * Ruta para crear una nueva FORMACION (POST /formations).
 *
 * Previo a pasar al controlador, se validan los datos enviados
 */
router.post('/', createValidation, formationController.createFormation);

/**
 * Ruta para actualizar una FORMACION específica, identificada por id (PUT /formations/{id}).
 * Previo a pasar al controlador, se validan los datos enviados
 */
router.put('/:id', updateValidation, formationController.updateFormation);

/**
 * Ruta para eliminar una FORMACION específica, identificada por id (DELETE /formations/{id}).
 */
router.delete('/:id', formationController.deleteFormation);

/**
 * Ruta para obtener una lista de OPCIONALES de un usuario (GET /optionals/by-user/{id}).
 */
router.get('/by-user/:id', formationController.getFormationsByUser);

module.exports = router;
