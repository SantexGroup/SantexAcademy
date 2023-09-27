const express = require('express');
const router = express.Router();
const controller = require('../controllers/categories.controller');

// Create
router.post('/',controller.crear);
// obtener categorias
router.get('/',controller.getAll);
// obtener categoria con sus productos
router.post('/getByids',controller.get);
// editar categoria
router.put('/:id',controller.editar);
// eliminar categoria
router.delete('/:id',controller.borrar);

module.exports= router;

