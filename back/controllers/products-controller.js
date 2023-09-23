// obtener todos
const productsService = require('../services/products-service');

// obtener todos
async function products(req, res, next) {
  console.log('funcionProductos');

  try {
    const result = await productsService.products();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

// obtener por id
async function getProductFromId(req, res) {
  const { id } = req.params;

  try {
    const articulo = await productsService.getProductoById(id);

    res.status(200).send(articulo);
  } catch (error) {
    res.status(404).send('Producto no encontrado: ' + error);
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
    idUsuario, idTipoProducto, nombre, detalles, precio, envio
  } = req.body;

  const product = await productsService.chargeProducts(idUsuario, idTipoProducto, nombre,
    detalles, precio, envio);

  res.status(201).send(product);
}

// modificar articulo
async function editProduct(req, res) {
  const { id } = req.params;
  const {
    idUsuario, idTipoProducto, nombre, detalles, precio, envio,
  } = req.body;

  const article = await productsService.editArticle(id, idUsuario, idTipoProducto, nombre,
    detalles, precio, envio);

  res.status(201).send(article);
}

module.exports = {
  products, getCategories, chargeProduct, getProductFromId, editProduct,
};
