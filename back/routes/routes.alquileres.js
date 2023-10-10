const express = require('express');
const router = express.Router();
const controller = require('../controllers/alquiler.controller')

// Create
router.post('/verify',controller.verificarAlquiler);
router.post('/',controller.crearAlquiler);
router.get('/:id',controller.alquileresById)
router.get('/gestionados/:id',controller.alquileresgestionados)
router.get('/pedidos/:id',controller.alquilerespedidos)
router.get('/',controller.alquileres)

module.exports = router;