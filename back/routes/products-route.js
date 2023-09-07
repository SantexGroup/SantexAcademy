const express = require('express');
const productsController = require('../controllers/products-controller');

const router = express.Router();

router.get('/products', productsController.products);

// categorias
router.get('/categories', productsController.getCategories);

module.exports = router;
