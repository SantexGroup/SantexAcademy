const { Router } = require('express');
const productValidator = require('../validations/product.validator');
const productController = require('../controllers/product.controller');
const JWTDecoder = require('../providers/jwt_decoder');
const { getProducts, getProdByName } = require('../providers/Products');

const productRouter = Router();

productRouter.post(
  '/products',
  JWTDecoder,
  productValidator,
  productController,
);

productRouter.get('/products', JWTDecoder, (_req, res) => res.send('OK'));
productRouter.get('/products', getProducts);
productRouter.get('/', getProdByName);

module.exports = productRouter;
