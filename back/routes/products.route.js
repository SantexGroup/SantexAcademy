const { Router } = require('express');

const productRouter = Router();

productRouter.post('/products');

module.exports = productRouter;
