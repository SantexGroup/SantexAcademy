const express = require('express');
const productsController = require('../controllers/products-controller');
const { isAuthenticated } = require('../middleware/authentication');

const router = express.Router();

router.get('/products', isAuthenticated, productsController.products);

// obtener por id
router.get('/obtener-producto-por-id/:id', productsController.getProductFromId);

// categorias
router.get('/categories', productsController.getCategories);

// cargar producto
router.post('/cargar-producto', productsController.chargeProduct);

// modificar articulo
router.put('/modificar-articulo/:id', productsController.editProduct);

module.exports = router;
