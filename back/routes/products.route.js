const { Router } = require('express');
const productValidator = require('../validations/product.validator');
const productController = require('../controllers/product.controller');

const productRouter = Router();

productRouter.post('/products', productValidator, productController);

module.exports = productRouter;
