const productsService = require('../services/products-service');

async function products(req, res, next) {
  console.log('funcionProductos');
  const { name, password } = req.body;

  try {
    const result = await productsService.products(name, password);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

module.exports = { products };
