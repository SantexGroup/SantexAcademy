const express = require('express');
const productsController = require('../controllers/products-controller');

const router = express.Router();

router.get('/products', productsController.products);

// obtener por id
router.get('/obtener-producto-por-id/:id', productsController.getProductFromId);

// categorias
router.get('/categories', productsController.getCategories);

// cargar producto
router.post('/cargar-producto', productsController.chargeProduct);

module.exports = router;
