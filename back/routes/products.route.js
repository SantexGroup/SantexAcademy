const { Router } = require('express');
const productValidator = require('../validations/product.validator');
const productController = require('../controllers/product.controller');
const JWTDecoder = require('../providers/jwt_decoder');

const productRouter = Router();

productRouter.post(
  '/products',
  JWTDecoder,
  productValidator,
  productController,
);

productRouter.get('/products', JWTDecoder, (_req, res) => res.send('OK'));

module.exports = productRouter;