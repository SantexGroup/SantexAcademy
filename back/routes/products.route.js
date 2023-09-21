const { Router } = require('express');
const productValidator = require('../validations/product.validator');
const productController = require('../controllers/product.controller');
const { default: JWTDecoder } = require('../providers/jwt_decoder');

const productRouter = Router();

productRouter.post(
  '/products',
  JWTDecoder,
  productValidator,
  productController,
);

module.exports = productRouter;
