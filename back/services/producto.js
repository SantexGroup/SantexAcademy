const { productProvider } = require('../providers');

const createProduct = async (producto) => {
  const newProduct = await productProvider.createProduct(producto);
  return newProduct;
};

const getProduct = async (id) => {
  const product = await productProvider.getProduct(id);
  if (product) {
    return product;
  }
  return null;
};

const getAllProducts = async () => {
  const products = await productProvider.getAllProducts();
  if (products) {
    return products;
  }
  return null;
};

const updateProduct = async (id, producto) => {
  const updatedProduct = await productProvider.updateProduct(id, producto);
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const deletedProduct = await productProvider.deleteProduct(id);
  return deletedProduct;
};

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};