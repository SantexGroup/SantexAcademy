const express = require('express');
const router = express.Router();

const controller = require('../controllers/carrito.controller');


router.post('/',controller.crearOEditar);
router.get('/:id',controller.getCarrito);
router.put('/:id',controller.editCarrito);
router.delete('/:id',controller.deleteCarrito);


module.exports = router;