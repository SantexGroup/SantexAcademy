const express = require('express');
const alquilerController = require('../controllers/alquiler-controller');

const router = express.Router();

//obtener articulos de comprador por id
router.get('/:idComprador', alquilerController.getAlquileresByIdComprador);

//crear un alquiler
router.post('/new/:idProducto', alquilerController.newAlquiler);

module.exports = router;
