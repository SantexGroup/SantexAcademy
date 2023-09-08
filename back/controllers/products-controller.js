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
// categorias
async function getCategories(req, res) {
  const categories = await productsService.getAllCategories();

  res.status(200).send(categories);
}

// cargar producto

async function chargeProduct(req, res) {
  const {
    idUsuario, idTipoProducto, nombre, detalles, precio, envio,
  } = req.body;

  const product = await productsService.chargeProducts(idUsuario, idTipoProducto, nombre,
    detalles, precio, envio);

  res.status(201).send(product);
}

module.exports = { products, getCategories, chargeProduct };
