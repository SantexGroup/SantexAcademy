const express = require('express');

const router = express.Router();
const formationController = require('../controllers/formation.controller');

/**
 * GET /formations: Este endpoint se utiliza para obtener una lista FORMATIONS.
 * Puede permitir parámetros de consulta para filtrar los resultados, paginación
 * para manejar grandes conjuntos de datos y ordenación para especificar el orden de los resultados.
 */
router.get('/', formationController.getFormations);

/**
 * GET /formations/{id}: Este endpoint se utiliza para obtener un FORMATION específico
 * identificado por su ID.
 */
router.get('/:id', formationController.getFormationById);

/**
 * POST /formations: Este endpoint se utiliza para crear un nuevo FORMATION.
 * Se envían los datos necesarios en el cuerpo de la solicitud luego de la
 * creación exitosa, devuelve los detalles del recurso recién creado.
 */
router.post('/', formationController.createFormation);

/**
 * PUT /formations/{id}: Este endpoint se utiliza para actualizar un FORMATION existente
 * identificado por su ID. Se envían los nuevos datos en el cuerpo de la solicitud y,
 * después de la actualización exitosa, devuelve los detalles actualizados del recurso.
 */
router.put('/:id', formationController.updateFormation);

/**
 * DELETE /formations/{id}: Este endpoint se utiliza para eliminar un FORMATION existente
 * identificado por su ID. Devuelve un estado de éxito o error.
 */
router.delete('/:id', formationController.deleteFormation);

module.exports = router;
