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
    res.status(404).send(`Producto no encontrado: ${error}`);
  }
}

// categorias
async function getCategories(req, res) {
  const categories = await productsService.getAllCategories();

  res.status(200).send(categories);
}

// categorias por id
async function getCategoriesFromId(req, res) {
  const { id } = req.params;

  try {
    const categoria = await productsService.getCategoriaById(id);

    res.status(200).send(categoria);
  } catch (error) {
    res.status(404).send('Categoria no encontrada');
  }
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

// productos por vendedor
async function getProductosVendedor(req, res) {
  const { id } = req.params;
  const productosVendedor = await productsService.getProductosPorVendedor(id);

  res.status(200).send(productosVendedor);
}

// eliminar articulo
async function deleteProduct(req, res) {
  const { id } = req.params;

  const result = await productsService.deleteArticle(id);

  if (result.success) {
    res.status(201).send({ message: `Articulo con id ${id} ha sido eliminado con éxito` });
  } else {
    res.status(404).send({ message: `No se encontró el articulo con ID ${id}` });
  }
}

module.exports = {
  products,
  getCategories,
  chargeProduct,
  getProductFromId,
  editProduct,
  getCategoriesFromId,
  getProductosVendedor,
  deleteProduct,
};
