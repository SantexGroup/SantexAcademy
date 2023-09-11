const express = require('express');
const alquileresVendedorController = require('../controllers/alquileres-vendedor-controller');

const router = express.Router();

// obtener alquileres segun vendedor

router.get('/alquileres-vendedor/:id', alquileresVendedorController.getAlquileresByVendedor);

module.exports = router;
