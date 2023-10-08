const express = require('express');
const router = express.Router();

const controller = require('../controllers/carrito.controller');


router.post('/',controller.crearOEditar);
router.get('/:id',controller.getCarrito);
router.put('/:id',controller.editCarrito);
router.delete('/:id',controller.deleteCarrito);
router.put('/add/:id',controller.addProduct);
router.put('/deleteProd/:id',controller.deleteProduct);


module.exports = router;