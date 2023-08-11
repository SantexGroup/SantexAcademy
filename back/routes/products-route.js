const express = require('express');
const productsController = require('../controllers/products-controller');

const router = express.Router();

router.post('/products', productsController.products);

module.exports = router;
