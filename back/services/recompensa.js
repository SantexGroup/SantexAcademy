const { produtcProvider } = require('../providers');

const createProduct = async (producto) => {
  const newProduct = await produtcProvider.createProduct(producto);
  return newProduct;
};

const getpPoduct = async (id) => {
  const product = await produtcProvider.getpPoduct(id);
  if (product) {
    return product;
  }
  return null;
};

const getAllProducts = async () => {
  const products = await produtcProvider.getAllProducts();
  if (products) {
    return products;
  }
  return null;
};

const updateProduct = async (id, producto) => {
  const updatedproduct = await produtcProvider.updateProduct(id, producto);
  return updatedproduct;
};

const deleteproduct = async (id) => {
  const deletedproduct = await produtcProvider.deleteproduct(id);
  return deletedproduct;
};

module.exports = {
  createProduct,
  getpPoduct,
  getAllProducts,
  updateProduct,
  deleteproduct,
};
