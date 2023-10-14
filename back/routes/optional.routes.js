const express = require('express');
const { optionalValidations } = require('../validations');
const { checkValidationResult } = require('../middleware');

const router = express.Router();
const optinalController = require('../controllers/optional.controller');

const createValidation = [optionalValidations.create, checkValidationResult];
const updateValidation = [optionalValidations.update, checkValidationResult];

/**
 * Ruta para obtener una lista de OPCIONALES (GET /optionals).
 *
 * Puede permitir parámetros de consulta para filtrar los resultados, paginación
 * para manejar grandes conjuntos de datos y ordenación para especificar el orden de los resultados.
 */
router.get('/', optinalController.getOptionals);

/**
 * Ruta para obtener un OPCIONAL específicando su id (GET /optionals/{id}).
 */
router.get('/:id', optinalController.getOptionalById);

/**
 * Ruta para crear un nuevo OPCIONAL (POST /optionals).
 *
 * Previo a pasar al controlador, se validan los datos enviados
 */
router.post('/', createValidation, optinalController.createOptional);

/**
 * Ruta para actualizar un OPCIONAL especificando su id (PUT /optionals/{id}).
 * Previo a pasar al controlador, se validan los datos enviados
 */
router.put('/:id', updateValidation, optinalController.updateOptional);

/**
 * Ruta para eliminar un OPCIONAL identificando su id (DELETE /optionals/{id}).
 */
router.delete('/:id', optinalController.deleteOptional);

/**
 * Ruta para obtener una lista de OPCIONALES de un usuario (GET /optionals/by-user/{id}).
 */
router.get('/by-user/:id', optinalController.getOptionalsByUser);

module.exports = router;
